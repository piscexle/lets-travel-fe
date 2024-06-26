import { useAppDispatch, useAppSelector } from '@/store';
import { getCustomerFeedback } from '@/store/customer/customer.action';
import { Carousel, Flex, Image, Modal, Rate, Space, Typography } from 'antd';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import './style.scss';
import { ItemCustomerFeedback } from '@/store/customer/customer.type';
import HeaderRectangle from '@/components/SectionHead/SectionHead';
import { isURLValid } from '@/utils/string.helper';
import { NO_IMAGE } from '@/config/constant';

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplaySpeed: 5000,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Feedback = () => {
  const t = useTranslations('common');
  const { listCustomerFeedback } = useAppSelector((state) => state.customerSlice);
  const dispatch = useAppDispatch();
  const [infoFeedback, setInfoFeedback] = useState<ItemCustomerFeedback>();

  useEffect(() => {
    dispatch(getCustomerFeedback({ page: 1, searchKey: '', take: 10, order: 'ASC' }));
  }, [dispatch]);

  return (
    <div className="home-feedback">
      <div className="home-feedback-content">
        <HeaderRectangle
          title={t('itemFeedback')}
          titleIsLeft
          miniTitle="hihi"
          className="feedback-rectangle"
        />
        {listCustomerFeedback.data.length > 0 && (
          <div className="home-feedback-carousel">
            <Carousel {...carouselSettings}>
              {listCustomerFeedback.data.map((el) => (
                <div key={el.id}>
                  <div
                    className="home-feedback-item"
                    onClick={() => setInfoFeedback(el)}
                    aria-hidden="true"
                  >
                    <Space>
                      <Image src={el.avatar} alt="avatar" preview={false} />
                      <span className="customer-name">{el.name}</span>
                    </Space>
                    <h4>{el.position}</h4>
                    <Typography.Paragraph
                      ellipsis={{ rows: 2, expandable: true, symbol: ' ' }}
                      className="customer-message"
                    >
                      {el.message}
                    </Typography.Paragraph>
                    <Flex justify="flex-end" className="feedback-rate-start">
                      <Rate disabled defaultValue={el.voteStar} />
                    </Flex>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
      <Modal
        title=""
        centered
        open={!!infoFeedback?.id}
        onCancel={() => setInfoFeedback({} as ItemCustomerFeedback)}
        footer={[]}
        rootClassName="modal-feedback"
        closable={false}
      >
        <div className="modal-feedback-content">
          <div>
            <div className="modal-feedback-content-info">
              <Space>
                <Image
                  preview={false}
                  src={isURLValid(infoFeedback?.avatar as string) ? infoFeedback?.avatar : NO_IMAGE}
                />
                <Flex vertical gap={8}>
                  <h5>{infoFeedback?.name}</h5>
                  <h6>{infoFeedback?.position}</h6>
                </Flex>
              </Space>
              <Flex className="feedback-rate" justify="flex-end">
                <Rate disabled defaultValue={infoFeedback?.voteStar} />
              </Flex>
            </div>
          </div>
          <div className="modal-feedback-content-message">
            <p>{infoFeedback?.message}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Feedback;
