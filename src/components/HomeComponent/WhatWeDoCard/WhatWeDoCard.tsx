import { Carousel, Col, Flex, Image, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import './style.scss';
import { useAppDispatch, useAppSelector } from '@/store';
import { getAllWhatWeDo } from '@/store/what-we-do/what-we-do.action';
import { useLocale, useTranslations } from 'next-intl';

const WhatWeDoCardPage = ({ id }: { id: string }) => {
  const locale = useLocale();
  const { data } = useAppSelector((state) => state.whatWeDosSlice);
  const dispatch = useAppDispatch();
  const t = useTranslations('common');
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    dispatch(getAllWhatWeDo());
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0) {
      const kq: string[] = data.map((el) => el.image);
      setImages(kq);
    }
  }, [data]);

  return (
    <div className="what-we-do" id={id}>
      <div className="title">
        <p />
        <h3>{t('whatWeDo')}</h3>
      </div>
      <div className="what-we-do-slide">
        <Row justify="center">
          <Col lg={12} md={12} xs={24} sm={24} className="image-left">
            <Carousel autoplay dots={false}>
              {images.map((el, index) => (
                <Image src={el} alt="" key={index} preview={false} />
              ))}
            </Carousel>
          </Col>
          <Col lg={12} md={12} xs={24} sm={24}>
            <Flex vertical className="text-right">
              {data.map((el) => (
                <Flex key={el.id} className="item-text">
                  <div className="container-slide-icon">
                    <Image preview={false} src={el.icon} alt="" />
                  </div>
                  <Flex vertical>
                    <h4>{el?.title?.[locale]}</h4>
                    <div
                      className="text-description  sun-editor-editable sun-editor-editable-override"
                      dangerouslySetInnerHTML={{
                        __html: el?.description?.[locale],
                      }}
                    />
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default WhatWeDoCardPage;
