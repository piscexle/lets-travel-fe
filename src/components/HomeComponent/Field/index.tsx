import React, { useEffect, useMemo } from 'react';
import './style.scss';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import HeaderRectangle from '@/components/SectionHead/SectionHead';
import { useAppDispatch, useAppSelector } from '@/store';
import { getListWhatWeDo } from '@/store/what-we-do/what-we-do.action';
import { Flex, Popover } from 'antd';
import CustomButton from '@/components/Button/CustomButton';
import { getCustomerByWhatWeDo } from '@/store/customer/customer.action';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import SendIcon from '@/icons/SendIcons';

const Field = () => {
  const {
    dataWhatWeDo: { data, meta },
  } = useAppSelector((state) => state.whatWeDosSlice);
  const { dataCustomerByWhatWeDo } = useAppSelector((state) => state.customerSlice);

  const dispatch = useAppDispatch();
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  useEffect(() => {
    dispatch(getListWhatWeDo({ page: 1, take: 6, searchKey: '', order: 'ASC' }));
  }, [dispatch]);

  const handleClick = (id: string) => {
    dispatch(
      getCustomerByWhatWeDo({ searchKey: '', page: 1, take: 3, whatWeDoId: id, order: 'ASC' })
    );
  };

  const content = useMemo(
    () => (
      <div className="popover-customer-content">
        <Flex justify="flex-end">
          {(dataCustomerByWhatWeDo?.meta?.itemCount as number) > 3 && (
            <span
              className="icon-arrow"
              onClick={() => router.push('/projects')}
              aria-hidden="true"
            >
              <ArrowRightOutlined />
            </span>
          )}
        </Flex>
        <Flex gap={20}>
          {dataCustomerByWhatWeDo.data?.map((el) => (
            <div key={el.id} onClick={() => router.push('/projects')} aria-hidden="true">
              <Image src={el.image} width={100} height={100} alt="" />
            </div>
          ))}
        </Flex>
      </div>
    ),
    [dataCustomerByWhatWeDo.data]
  );

  return (
    <div className=" home-fields">
      <HeaderRectangle title={t('itemField')} titleIsRight={false} />
      <div className="container">
        <div className="home-fields-content">
          {(meta.itemCount as number) > 6 && (
            <Flex justify="flex-end">
              <CustomButton className="fields-btn">
                <SendIcon />
                <p className="button-text"> {t('other')}</p>
              </CustomButton>
            </Flex>
          )}
          <Flex
            justify={(meta.itemCount as number) > 6 ? 'space-between' : 'flex-start'}
            gap={20}
            wrap="wrap"
          >
            {data.map((el) => (
              <Popover
                key={el.id}
                content={content}
                placement="bottom"
                trigger="click"
                rootClassName="popover-customer"
              >
                <div
                  key={el.id}
                  className="fields-item"
                  onClick={() => handleClick(el.id)}
                  aria-hidden="true"
                >
                  <div className="fields-image">
                    <Image src={el.image} width={200} height={200} quality={100} alt="" />
                  </div>
                  <p>{el.title?.[locale]}</p>
                </div>
              </Popover>
            ))}
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Field;
