'use client';

import Banner from '@/components/Banner/Banner';
import { NextArrow, PrevArrow } from '@/components/Carousel/ArrowCarousel';
import { MainClient } from '@/layouts/MainClient';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';
import { Button, Col, DatePicker, Form, Row, Select } from 'antd';
import GuestRoomSelector from '@/components/GuestRoomSelect/GuestRoomSelect';
import { SearchOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';

const carouselBannerSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplaySpeed: 5000,
  autoplay: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const StayPage = () => {
  const [formRef] = Form.useForm();
  const t = useTranslations('common');

  const infoBannerStay = [
    {
      id: '1',
      image: '/images/bannerHG.png',
      title: 'Hà Giang',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet',
      buttonLink: 'https://shopee.vn/babyhousevietnam',
    },
    {
      id: '2',
      image: '/images/bannerHG.png',
      title: 'Hà Tinh',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet',
      buttonLink: 'https://shopee.vn',
    },
  ];
  return (
    <MainClient>
      <Banner
        loading
        data={
          infoBannerStay?.map((item: any) => ({
            id: uuidv4(),
            image: item?.image,
            title: item?.title,
            description: item?.description,
            buttonLink: item?.buttonLink,
            width: 3000,
            height: 700,
          })) || []
        }
        carouselBannerSettings={carouselBannerSettings}
      />
      <div className="container">
        <div className="wrapper-search-stays">
          <Form layout="vertical" form={formRef}>
            <Row gutter={[12, 12]}>
              <Col span={24}>
                <Form.Item
                  label="City / Destination / Hotel name"
                  name="City, destination, or hotel name"
                >
                  <Select
                    showSearch
                    placeholder="Select a city, destination, or hotel/ homestay name"
                    defaultValue="Hà Giang"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                <Form.Item label="Check-in">
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={6}>
                <Form.Item label="Check-out">
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24} lg={12} xl={7}>
                <Form.Item label="Guests">
                  <GuestRoomSelector />
                </Form.Item>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={5}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <Button type="primary">
                  <SearchOutlined />
                  {t('itemSearchStays')}
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="wrapper-stays-content"></div>
      </div>
    </MainClient>
  );
};

export default StayPage;
