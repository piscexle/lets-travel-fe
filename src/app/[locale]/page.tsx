'use client';

import { motion } from 'framer-motion';
// import AboutUsCardComponent from '@/components/HomeComponent/AboutUsCard/AboutUsCard';
// import IntroPage from '@/components/HomeComponent/IntroPage/IntroCard';
import FieldComponent from '@/components/HomeComponent/Field';
// import FeedbackComponent from '@/components/HomeComponent/Feedback';
// import OverviewComponent from '@/components/HomeComponent/Overview';
// import HomeNewsComponent from '@/components/HomeComponent/HomeNews';
// import HomeContactComponent from '@/components/HomeComponent/Contact';
import { MainClient } from '@/layouts/MainClient';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store';
import { useRouter } from '@/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { getDataServices } from '@/store/services/services.action';
import { Button, Carousel, Col, Flex, Image as ImageAnt, Rate, Row, Typography } from 'antd';
import { resetServicesDetail } from '@/store/services/services.reducer';
import ArrowIcon from '@/icons/ArrowIcon';
import './page.scss';
import { getInfoBanner } from '@/store/banner/banner.action';
import Image from 'next/image';
import { createRGBDataURL } from '@/utils/createRGBDataURL';
import SectionHead from '@/components/SectionHead/SectionHead';
import { getCustomerFeedback } from '@/store/customer/customer.action';
import CountUp from 'react-countup';
import dayjs from 'dayjs';
import { getListNewsAction } from '@/store/news/news.action';
import PhoneIcon from '@/icons/PhoneIcon';
import GmailIcon from '@/icons/GmailIcon';
import FacebookIcon from '@/icons/FacebookIcon';
import EmailIcon from '@/icons/EmailIcon';
import SendIcon from '@/icons/SendIcons';

type TypesAboutUs = {
  id?: string;
  title?: string;
  content?: string;
};

const motionSetting = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 1 },
};

const HomePage = () => {
  const { services } = useAppSelector((state) => state.serviceSlice);
  const { infoBanner } = useAppSelector((state) => state.bannerSlice);
  const { infoBusiness } = useAppSelector((state) => state.businessSlice);
  // const { dataWhatWeDo } = useAppSelector((state) => state.whatWeDosSlice);
  // const { dataCustomerByWhatWeDo } = useAppSelector((state) => state.customerSlice);
  const { listCustomerFeedback } = useAppSelector((state) => state.customerSlice);
  const { listNews } = useAppSelector((state) => state.newsSlice);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const t = useTranslations('common');

  useEffect(() => {
    dispatch(getDataServices({ page: 1, take: 8, order: 'ASC', searchKey: '' }));
    dispatch(getInfoBanner({ menuKey: 'HOME' }));
    dispatch(getCustomerFeedback({ page: 1, searchKey: '', take: 10, order: 'ASC' }));
    dispatch(getListNewsAction({ page: 1, take: 5, order: 'ASC', searchKey: '', isActive: true }));
  }, [dispatch]);

  const dataMockAboutUs: TypesAboutUs[] = [
    {
      id: '1',
      title: t('titleVision'),
      content: t('contentVision'),
    },
    {
      id: '2',
      title: t('titleMission'),
      content: t('contentMission'),
    },
    {
      id: '3',
      title: t('titleCoreValues'),
      content: t('contentCoreValues'),
    },
    {
      id: '4',
      title: t('titleDevelopmentHistory'),
      content: t('contentDevelopmentHistory'),
    },
  ];

  // const settingCarouselField = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   autoplaySpeed: 5000,
  //   autoplay: false,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const settingCarouselCustomerFeedback = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: false,
    centerMode: false,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <MainClient>
      {/* phần banner */}
      <div className="wrapper-home-page-banner">
        <div className="wrapper-home-page-banner-image">
          {infoBanner.images && (
            <Image
              fill
              placeholder="blur"
              blurDataURL={createRGBDataURL(199, 199, 199)}
              src={infoBanner.images}
              alt=""
              sizes="100%"
            />
          )}
        </div>
        <div className="container">
          <div className=" wrapper-home-page-banner-content">
            <div className="wrapper-home-page-banner-title">
              <motion.h3 {...motionSetting}>{infoBanner?.title?.[locale]}</motion.h3>
            </div>
            <div className="wrapper-home-page-banner-description">
              <motion.h6 {...motionSetting} transition={{ duration: 1, delay: 1 }}>
                {infoBanner?.description?.[locale]}
              </motion.h6>
            </div>
            <motion.div {...motionSetting} transition={{ duration: 1, delay: 1 }}>
              <Button
                type="primary"
                className="wrapper-home-page-banner-button"
                icon={<SendIcon />}
                onClick={() => {
                  router.push('/about-us');
                }}
              >
                <p>{t('teamHome')}</p>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* phần dịch vụ */}
      <div className="container">
        <div className="wrapper-home-page-services">
          {services?.length > 0 ? (
            <Row gutter={[20, 20]}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <div className="wrapper-home-page-services-item-first">
                  <h4>{t('itemServices')}</h4>
                  <h5>{t('itemFirstCardServiceHome')}</h5>
                  <Flex justify="flex-end">
                    <Button
                      type="primary"
                      onClick={() => {
                        dispatch(resetServicesDetail());
                        router.push('/services');
                      }}
                    >
                      {t('itemSeeAll')}
                    </Button>
                  </Flex>
                </div>
              </Col>
              {services.map((el) => (
                <Col xs={24} sm={24} md={8} lg={8} xl={8} key={el.id}>
                  <div className="wrapper-home-page-services-item">
                    <Flex vertical className="wrapper-home-page-services-item-content">
                      <Flex justify="space-between" align="center">
                        <h4>{el?.title?.[locale]}</h4>
                        <ImageAnt src={el.icon} alt="" preview={false} />
                      </Flex>
                      <Typography.Paragraph
                        ellipsis={{ rows: 4, symbol: ' ' }}
                        className="wrapper-home-page-services-item-content-desc"
                      >
                        {el?.description?.[locale]}
                      </Typography.Paragraph>
                      <Flex justify="flex-end">
                        <Button
                          onClick={() =>
                            router.push({
                              pathname: '/services/[slug]',
                              params: { slug: el.id },
                            })
                          }
                          icon={<ArrowIcon />}
                        />
                      </Flex>
                    </Flex>
                  </div>
                </Col>
              ))}
            </Row>
          ) : null}
        </div>
      </div>

      {/* phần về chúng tôi */}
      <div className="container">
        <div className="wrapper-home-page-about-us">
          <picture className="wrapper-home-page-about-us-image">
            <source srcSet="/images/tech_background.jpg" type="image/jpg" />
            <img
              className="wrapper-home-page-about-us-image"
              src="/images/tech_background.jpg"
              alt="about us computer"
            />
          </picture>
          <div className="wrapper-home-page-about-us-opacity-layer" />
          <div className="wrapper-home-page-about-us-carousel">
            <Carousel className="carousel-main" autoplay={false}>
              {dataMockAboutUs.map((item) => (
                <div className="wrapper-home-page-about-us-carousel-content" key={item.id}>
                  <h3 className="wrapper-home-page-about-us-carousel-title">{item.title}</h3>
                  <span className="wrapper-home-page-about-us-carousel-description">
                    {item.content}
                  </span>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      {/* lĩnh vực */}
      {/* <SectionHead title={t('itemField')} titleIsRight={false} /> */}
      {/* <div className="container">
        <Carousel {...settingCarouselField}></Carousel>
      </div> */}
      <FieldComponent />

      {/* khách hàng đánh giá */}
      <SectionHead title={t('itemFeedback')} titleIsRight />
      <div className="container">
        <Carousel rootClassName="wrapper-home-page-feedback" {...settingCarouselCustomerFeedback}>
          {listCustomerFeedback.data.map((el) => (
            <div key={el.id}>
              <div className="wrapper-home-page-feedback-item" aria-hidden="true">
                <Flex align="center" justify="center" gap={12}>
                  <ImageAnt src={el.avatar} alt="avatar" preview={false} />
                  <span className="customer-name">{el.name}</span>
                </Flex>
                <h4>{el.position}</h4>
                <p className="customer-message">{el.message}</p>
                <Flex justify="flex-end" className="feedback-rate-start">
                  <Rate disabled defaultValue={el.voteStar} />
                </Flex>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* tổng quan */}
      <SectionHead title={t('itemOverview')} titleIsRight={false} />
      <div className="container wrapper-home-page-news">
        <Flex align="center" justify="center">
          <div className="wrapper-home-page-overview">
            <div className="quick-fact">
              <div className="overview-title">
                <h3>{t('itemOverview')}</h3>
                <span className="overview-year">{`${t('establish')}: ${dayjs(
                  infoBusiness.establish
                ).format('DD/MM/YYYY')}`}</span>
                <span className="responsive-overview-year">{`${t('establish')}: ${dayjs(
                  infoBusiness.establish
                ).format('DD/MM/YYYY')}`}</span>
              </div>

              <div className="text-color">
                <h4 className="text-red text-card">
                  <span>+</span>
                  <span className="count-up">
                    <CountUp
                      end={dayjs().diff(dayjs(infoBusiness?.establish), 'months')}
                      duration={5}
                      enableScrollSpy
                    />
                  </span>
                  <span>{t('month')}</span>
                </h4>
                <h4 className="text-green text-card">
                  <span>+</span>
                  <span className="count-up count-up-client">
                    <CountUp end={infoBusiness.clients || 0} duration={5} enableScrollSpy />
                  </span>
                  <span>{t('client')}</span>
                </h4>
                <h4 className="text-yellow text-card">
                  <span>+</span>
                  <span className="count-up">
                    <CountUp end={infoBusiness?.personnel || 0} duration={5} enableScrollSpy />
                  </span>
                  <span>{t('textPersonnel')}</span>
                </h4>
                <h4 className="text-blue text-card">
                  <span>+</span>
                  <span className="count-up">
                    <CountUp end={infoBusiness.projects || 0} duration={5} enableScrollSpy />
                  </span>
                  <span>{t('project')}</span>
                </h4>
              </div>
              <p className="text-intro">{infoBusiness?.overviewText?.[locale]}</p>
            </div>
          </div>
        </Flex>
      </div>

      {/* tin tức */}
      <SectionHead title={t('itemNews')} titleIsRight />
      <div className="container wrapper-home-page-news">
        <Row gutter={[16, 16]} className="wrapper-home-page-news-container">
          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} className="news-normal">
            {listNews?.data?.map((el) => (
              <div
                className="home-news-item"
                key={el.id}
                onClick={() =>
                  router.push({
                    pathname: '/news/[slug]',
                    params: { slug: el.slug },
                  })
                }
                aria-hidden="true"
              >
                <Row gutter={[16, 16]}>
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
            ))}
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} className="news-outstanding">
            {listNews?.data?.length === 5 && (
              <div
                className="news-outstanding-content"
                onClick={() =>
                  router.push({
                    pathname: '/news/[slug]',
                    params: { slug: listNews?.data?.[4]?.slug },
                  })
                }
                aria-hidden="true"
              >
                <div className="outstanding-image">
                  <Image src={listNews?.data?.[4]?.thumbnail} alt="" width={800} height={300} />
                </div>
                <h3>{listNews?.data[4]?.title?.[locale]}</h3>
                <div className="outstanding-desc">
                  <p>{listNews?.data?.[4]?.description?.[locale]}</p>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>

      {/* liên hệ */}
      <SectionHead title={t('itemContact')} titleIsRight={false} />
      <div className="container wrapper-home-page-contact-us">
        <div className="contact-info">
          <div className="container-info">
            <Flex vertical align="center">
              <h3>{t('textInfo')}</h3>
              <div className="text-info">
                <div className="block-mobile">
                  <Flex vertical>
                    <Flex className="text-margin">
                      <PhoneIcon />
                      <p>{infoBusiness?.phoneNumber}</p>
                    </Flex>
                    <Flex>
                      <GmailIcon />
                      <p>{infoBusiness?.gmail}</p>
                    </Flex>
                  </Flex>
                </div>
                <div>
                  <Flex vertical>
                    <Flex className="text-margin">
                      <FacebookIcon />
                      <a href={infoBusiness.facebook} target="_blank" rel="noreferrer">
                        Lets travel
                      </a>
                    </Flex>
                    <Flex>
                      <EmailIcon />
                      <p>{infoBusiness.telegram}</p>
                    </Flex>
                  </Flex>
                </div>
              </div>
              <p className="text-desc">{infoBusiness?.informationText?.[locale]}</p>
            </Flex>
          </div>
        </div>
      </div>
    </MainClient>
  );
};

export default HomePage;
