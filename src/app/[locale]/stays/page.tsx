'use client';

import Banner from '@/components/Banner/Banner';
import { NextArrow, PrevArrow } from '@/components/Carousel/ArrowCarousel';
import { MainClient } from '@/layouts/MainClient';
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.scss';
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  List,
  Row,
  Select,
  Space,
  Tooltip,
} from 'antd';
import GuestRoomSelector from '@/components/GuestRoomSelect/GuestRoomSelect';
import { CopyOutlined, SearchOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import SectionHead from '@/components/SectionHead/SectionHead';
import SearchIcon from '@/icons/SearchIcon';
import CardItem from '@/components/Card/Card';
import CustomButton from '@/components/Button/CustomButton';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { createRGBDataURL } from '@/utils/createRGBDataURL';

const { Meta } = Card;

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
  const scrollToRef = useRef<HTMLDivElement | null>(null);
  const [location, setLocation] = useState('');
  const router = useRouter();

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const couponData = [
    {
      title: 'Point back up to 300K | Hotel',
      description: 'Point back 150K when booking top luxury hotels from 4 milPoint back...',
      code: 'KSGANNHAXU',
    },
    {
      title: 'Coupon 1 MIL',
      description: 'Discount 100K VND when booking selected hotels from 3 mil...',
      code: 'CHINA1TR',
    },
    {
      title: 'Coupon 200K',
      description: 'Discount 100K when booking selected hotels...',
      code: 'KSANQUOCTE',
    },
    {
      title: 'Coupon 1 MIL | Malaysia',
      description: 'Discount 6% up to 200K vnd when booking hotel in Malaysia from 2 mil...',
      code: 'HTMALAYSIA',
    },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getAddress = [
    {
      id: '1',
      address: '615 Đ. Nguyễn Lương Bằng, Hòa Hiệp Nam, Liên Chiểu, Đà Nẵng, Việt Nam',
    },
    {
      id: '2',
      address: 'Hà Giang, Việt Nam',
    },
  ];
  const dataMockStays = [
    {
      id: '1',
      staySlug: '/',
      name: 'Khách sạn Hà Giang',
      thumbnail: '/images/delivery1.png',
      amountVN: 3000,
      amountUS: 0.2,
      tienVN: 400000,
      tienUS: 16,
      rate: 5,
      place: 'Đà Lạt',
    },
    {
      id: '2',
      staySlug: '/',
      name: 'Khách sạn Hà Giang',
      thumbnail: '/images/delivery1.png',
      amountVN: 3000,
      amountUS: 0.2,
      tienVN: 400000,
      tienUS: 16,
      discountPercentage: 10,
      rate: 5,
      place: 'Đà Lạt',
    },
    {
      id: '3',
      staySlug: '/',
      name: 'Khách sạn Hà Giang',
      thumbnail: '/images/delivery1.png',
      amountVN: 3000,
      amountUS: 0.2,
      tienVN: 400000,
      tienUS: 16,
      discountPercentage: 5,
      rate: 4,
      place: 'Đà Lạt',
    },
    {
      id: '4',
      staySlug: '/',
      name: 'Khách sạn Hà Giang',
      thumbnail: '/images/delivery1.png',
      amountVN: 3000,
      amountUS: 0.2,
      tienVN: 400000,
      tienUS: 16,
      rate: 5,
      place: 'Đà Lạt',
    },
    {
      id: '5',
      staySlug: '/',
      name: 'Khách sạn Hà Giang',
      thumbnail: '/images/delivery1.png',
      amountVN: 3000,
      amountUS: 0.2,
      tienVN: 400000,
      tienUS: 16,
      rate: 3,
      place: 'Đà Lạt',
    },
  ];
  useEffect(() => {
    setLocation(getAddress[0]?.address?.replaceAll(' ', '+'));
  }, [getAddress]);

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

  const dataMockEx = [
    {
      id: '1',
      staySlug: '/',
      name: 'Khách sạn Hà Giang',
      thumbnail: '/images/delivery1.png',
      amountVN: 0,
      amountUS: 0,
      tienVN: 0,
      tienUS: 0,
      place: 'Đà Lạt',
      description: 'hello world',
      createdAt: '2024-08-09',
      avatar: '/images/avatar1.jpg',
      author: 'John',
    },
    {
      id: '2',
      staySlug: '/',
      name: 'Khách sạn Hà Giang',
      thumbnail: '/images/delivery1.png',
      amountVN: 0,
      amountUS: 0,
      tienVN: 0,
      tienUS: 0,
      discountPercentage: 0,
      place: 'Đà Lạt',
      description: 'hello world',
      createdAt: '2024-08-09',
      avatar: '/images/avatar1.jpg',
      author: 'John',
    },
    {
      id: '3',
      staySlug: '/',
      name: 'Khách sạn Hà Giang',
      thumbnail: '/images/delivery1.png',
      amountVN: 0,
      amountUS: 0,
      tienVN: 0,
      tienUS: 0,
      discountPercentage: 0,
      place: 'Đà Lạt',
      description: 'hello world',
      createdAt: '2024-08-09',
      avatar: '/images/avatar1.jpg',
      author: 'John',
    },
    {
      id: '4',
      staySlug: '/',
      name: 'Khách sạn Hà Giang',
      thumbnail: '/images/delivery1.png',
      amountVN: 0,
      amountUS: 0,
      tienVN: 0,
      tienUS: 0,
      place: 'Đà Lạt',
      description: 'hello world',
      createdAt: '2024-08-09',
      avatar: '/images/avatar1.jpg',
      author: 'John',
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
        <div className="wrapper-stays-content">
          <SectionHead
            miniTitle={t('itemPopular')}
            description="Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands."
            title={t('itemStay')}
            titleIsLeft
          />
          <div>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} className="wrapper-stays-content-left">
                <div className="wrapper-stays-content-left-search">
                  <Input
                    type="search"
                    className="base-input-module"
                    placeholder={`${t('titleSearchStays')}`}
                    // onChange={handleInputChange}
                    // onKeyPress={(e) => handleKeyPress(e)}
                    // value={searchTerm}
                    suffix={<Button type="link" icon={<SearchIcon />} />}
                  />
                </div>
                <div className="wrapper-stays-content-left-item">
                  <List
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={dataMockStays}
                    renderItem={(item) => (
                      <List.Item>
                        <CardItem
                          key={uuidv4()}
                          name={item.name}
                          amountVN={item.amountVN}
                          amountUS={item.amountUS}
                          slug={item.staySlug}
                          thumbnail={item.thumbnail}
                          tienVN={item.tienVN}
                          tienUS={item.tienUS}
                          discountPercentage={item.discountPercentage}
                          type="STAYS"
                          rate={item.rate}
                          place={item.place}
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={12}
                lg={12}
                xl={12}
                ref={scrollToRef}
                id="map-section"
                style={{ width: '100%' }}
              >
                <Space className="map">
                  <iframe
                    id="map-section"
                    width="100%"
                    height={850}
                    title="Let s travel"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDaOulQACiJzBfqumbsqg_-vKha8fCnL-s&q=${location}`}
                  />
                </Space>
              </Col>
            </Row>
          </div>

          <div className="wrapper-stays-voucher">
            <SectionHead
              miniTitle={t('titleForYou')}
              title={t('offer')}
              description={t('itemOfferVoucher')}
              titleIsLeft
            />
            <div className="banner-voucher">
              <Image
                alt="Offer"
                src="/images/banner-stay-voucher.jpg"
                sizes="100%"
                fill
                placeholder="blur"
                blurDataURL={createRGBDataURL(199, 199, 199)}
              />
            </div>
            <Row gutter={[12, 12]}>
              {couponData.slice(0, 4).map((coupon, index) => (
                <Col xs={12} sm={12} md={6} lg={6} xl={6} key={index} className="card-voucher">
                  <Card className="card-voucher-item" title="Hotel" bordered={false}>
                    <Meta title={coupon.title} description={coupon.description} />
                    <div className="card-voucher-item-code">
                      Code: <span className="text-code">{coupon.code}</span>
                      <Tooltip title="Đã sao chép!" trigger="click">
                        <div
                          style={{ cursor: 'pointer' }}
                          className="image-copy"
                          onClick={() => copyCode(coupon.code)}
                          aria-hidden
                        >
                          <CopyOutlined />
                        </div>
                      </Tooltip>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>

            <div style={{ textAlign: 'center' }}>
              <CustomButton
                type="primary"
                onClick={() => {
                  router.push('/');
                }}
              >
                Load more vouchers
              </CustomButton>
            </div>
          </div>
        </div>
        {/* Kinh nghiệm */}
        <SectionHead
          miniTitle="Blog"
          description="Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands."
          title={t('itemExperiences')}
          titleIsLeft
        />
        <div className="wrapper-services-page-stays">
          <Row gutter={[12, 12]}>
            {dataMockEx.map((item, index) => (
              <Col xs={12} sm={12} md={6} lg={6} xl={6} key={index}>
                <CardItem
                  key={uuidv4()}
                  name={item.name}
                  amountVN={item.amountVN}
                  amountUS={item.amountUS}
                  slug={item.staySlug}
                  thumbnail={item.thumbnail}
                  tienVN={item.tienVN}
                  tienUS={item.tienUS}
                  discountPercentage={item.discountPercentage}
                  type="BLOGS"
                  place={item.place}
                  description={item.description}
                  createdAt={item.createdAt}
                  author={item.author}
                  avatar={item.avatar}
                />
              </Col>
            ))}
          </Row>
          <div className="btn-load-more">
            <CustomButton
              type="primary"
              onClick={() => {
                router.push('/');
              }}
            >
              Load more {t('itemExperiences')}
            </CustomButton>
          </div>
        </div>
      </div>
    </MainClient>
  );
};

export default StayPage;
