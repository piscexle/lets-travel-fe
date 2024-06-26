import React, { useEffect } from 'react';
import './style.scss';
import HeaderRectangle from '@/components/SectionHead/SectionHead';
import { useLocale, useTranslations } from 'next-intl';
import { Col, Flex, Row, Typography } from 'antd';
import Image from 'next/image';
import CustomButton from '@/components/Button/CustomButton';
import { useAppDispatch, useAppSelector } from '@/store';
import { getListNewsAction } from '@/store/news/news.action';
import { useRouter } from 'next/navigation';

const Index = () => {
  const { listNews } = useAppSelector((state) => state.newsSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getListNewsAction({ page: 1, take: 5, order: 'ASC', searchKey: '', isActive: true }));
  }, [dispatch]);
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();

  return (
    <div className="home-news">
      <HeaderRectangle title={t('itemNews')} titleIsLeft miniTitle="hihi" />
      <div className="home-news-container">
        <Row gutter={{ xxl: 40, xl: 40, md: 35, sm: 30 }} className="row-home-news-container">
          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} className="news-normal">
            {listNews?.data?.map(
              (el, index) =>
                index > 0 && (
                  <div
                    className="home-news-item"
                    key={el.id}
                    onClick={() => router.push(`/news/${listNews?.data[0]?.slug}`)}
                    aria-hidden="true"
                  >
                    <Row gutter={20}>
                      <Col span={8}>
                        <div className="item-image">
                          <Image src={el?.thumbnail} alt="" width={500} height={500} />
                        </div>
                      </Col>
                      <Col span={16}>
                        <Flex vertical className="item-content">
                          <h3>{el.title?.[locale] || ''}</h3>
                          <Typography.Paragraph
                            ellipsis={{ rows: 2, symbol: ' ' }}
                            className="item-content-desc"
                          >
                            {el.description?.[locale] || ''}
                          </Typography.Paragraph>
                        </Flex>
                      </Col>
                    </Row>
                  </div>
                )
            )}
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} className="news-outstanding">
            {listNews?.data?.length > 3 && (
              <div
                className="news-outstanding-content"
                onClick={() => router.push(`/news/${listNews?.data[0]?.slug}`)}
                aria-hidden="true"
              >
                <div className="outstanding-image">
                  <Image src={listNews?.data[0]?.thumbnail} alt="" width={800} height={300} />
                </div>
                <h3>{listNews?.data[0]?.title?.[locale]}</h3>
                <div className="outstanding-desc">
                  <p>{listNews?.data[0]?.description?.[locale]}</p>
                </div>
              </div>
            )}
            {listNews?.data?.length <= 3 && (
              <div
                className="news-outstanding-less"
                onClick={() => router.push(`/news/${listNews?.data[0]?.slug}`)}
                aria-hidden="true"
              >
                <Row>
                  <Col xs={24} sm={10} md={11} lg={11} xl={11} xxl={11}>
                    <div className="outstanding-image">
                      <Image src={listNews?.data[0]?.thumbnail} alt="" width={800} height={300} />
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={10}
                    md={11}
                    lg={11}
                    xl={11}
                    xxl={11}
                    className="outstanding-desc"
                  >
                    <h3>{listNews?.data[0]?.title?.[locale]}</h3>
                    <div>
                      <p>{listNews?.data[0]?.description?.[locale]}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            )}
          </Col>
          <Col span={24}>
            <Flex justify="flex-end">
              <CustomButton className="home-news-btn" onClick={() => router.push('/news')}>
                {t('itemSeeAll')}
              </CustomButton>
            </Flex>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Index;
