'use client';

// import AboutUsCardComponent from '@/components/HomeComponent/AboutUsCard/AboutUsCard';
// import IntroPage from '@/components/HomeComponent/IntroPage/IntroCard';
import DestinationComponent from '@/components/HomeComponent/Destination';
// import FeedbackComponent from '@/components/HomeComponent/Feedback';
// import OverviewComponent from '@/components/HomeComponent/Overview';
// import HomeNewsComponent from '@/components/HomeComponent/HomeNews';
// import HomeContactComponent from '@/components/HomeComponent/Contact';
import { MainClient } from '@/layouts/MainClient';
import { useRouter } from '@/navigation';
import { useAppDispatch } from '@/store';
import { getDataServices } from '@/store/services/services.action';
import { Avatar, Button, Carousel as CarouselAnt, Col, Flex, Input, Row, Spin } from 'antd';
import { useTranslations } from 'next-intl';
import React, { Suspense, useEffect, useState } from 'react';
// import { resetServicesDetail } from '@/store/services/services.reducer';
// import ArrowIcon from '@/icons/ArrowIcon';
import Banner from '@/components/Banner/Banner';
import CustomButton from '@/components/Button/CustomButton';
import CardItem from '@/components/Card/Card';
import { NextArrow, PrevArrow } from '@/components/Carousel/ArrowCarousel';
import SectionHead from '@/components/SectionHead/SectionHead';
import Transports from '@/components/Transports/page';
import SearchIcon from '@/icons/SearchIcon';
import { getInfoBanner } from '@/store/banner/banner.action';
import { getCustomerFeedback } from '@/store/customer/customer.action';
import { getListNewsAction } from '@/store/news/news.action';
import {
  ClockCircleOutlined,
  FlagOutlined,
  RightOutlined,
  SmileOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { useSearchParams } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import { v4 as uuidv4 } from 'uuid';
import './page.scss';

// type TypesAboutUs = {
//   id?: string;
//   title?: string;
//   content?: string;
// };

const carouselBannerSettings = {
  dots: true,
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

const carouselSectionSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  autoplaySpeed: 3000,
  autoplay: true,
  initialSlide: 0,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
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
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

const carouselBlogSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  autoplaySpeed: 3000,
  autoplay: true,
  initialSlide: 0,
  draggable: true,
  responsive: [
    {
      breakpoint: 1024,
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

const HomePage = () => {
  // const { services } = useAppSelector((state) => state.serviceSlice);
  // const { infoBanner } = useAppSelector((state) => state.bannerSlice);
  // const { infoBusiness } = useAppSelector((state) => state.businessSlice);
  // const { dataWhatWeDo } = useAppSelector((state) => state.whatWeDosSlice);
  // const { dataCustomerByWhatWeDo } = useAppSelector((state) => state.customerSlice);

  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>(
    (searchParams.get('searchKey') as string) || ''
  );

  // const myVideoBannerRef = useRef<any>(null);

  const router = useRouter();
  const dispatch = useAppDispatch();
  const t = useTranslations('common');

  useEffect(() => {
    dispatch(getDataServices({ page: 1, take: 8, order: 'ASC', searchKey: '' }));
    dispatch(getInfoBanner({ menuKey: 'HOME' }));
    dispatch(getCustomerFeedback({ page: 1, searchKey: '', take: 10, order: 'ASC' }));
    dispatch(getListNewsAction({ page: 1, take: 5, order: 'ASC', searchKey: '', isActive: true }));
  }, [dispatch]);

  const handleSearchButtonClick = () => {
    if (searchTerm.length > 0) {
      // router.push(`/search?searchKey=${searchTerm}`);
      // dispatch(postFilterProductsAction({ searchKey: searchTerm }));
    }
  };

  const isMobile = useMediaQuery({ query: '(min-width: 575px)' });

  useEffect(() => {
    setSearchTerm(searchParams.get('searchKey') || '');
  }, [searchParams]);

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter' || e.charCode === 13) {
      if (searchTerm.length > 0) {
        // router.push(`/search?searchKey=${searchTerm}`, { scroll: false });
        // dispatch(postFilterProductsAction({ searchKey: searchTerm }));
      }
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const infoBanner = [
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

  const infoTransports = [
    {
      id: '1',
      title: 'Máy bay',
    },
    {
      id: '2',
      title: 'Xe khách',
    },
    {
      id: '3',
      title: 'Tàu',
    },
    {
      id: '4',
      title: 'Xe máy',
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
    {
      id: '5',
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

  const dataMockBlogs = [
    {
      id: '1',
      sectionName: 'Food',
      title:
        'Đồ ăn Hà Giang Đồ ăn Hà Giang Đồ ăn Hà Giang Đồ ăn Hà Giang Đồ ăn Hà Giang Đồ ăn Hà Giang Đồ ăn Hà Giang',
      thumbnail: '/images/food_7.jpg',
      place: 'Hà Giang',
      author: 'James',
      createdAt: '2022-01-01',
      avatar: '/images/avatar1.jpg',
      slug: '/',
    },
    {
      id: '2',
      sectionName: 'Food',
      title: 'Đồ ăn Hà Giang',
      thumbnail: '/images/food_7.jpg',
      place: 'Hà Giang',
      author: 'James',
      createdAt: '2022-01-01',
      avatar: '/images/avatar1.jpg',
      slug: '/',
    },
    {
      id: '3',
      sectionName: 'Food',
      title: 'Đồ ăn Hà Giang',
      thumbnail: '/images/food_7.jpg',
      place: 'Hà Giang',
      author: 'James',
      createdAt: '2022-01-01',
      avatar: '/images/avatar1.jpg',
      slug: '/',
    },
    {
      id: '4',
      sectionName: 'Food',
      title: 'Đồ ăn Hà Giang',
      thumbnail: '/images/food_7.jpg',
      place: 'Hà Giang',
      author: 'James',
      createdAt: '2022-01-01',
      avatar: '/images/avatar1.jpg',
      slug: '/',
    },
    {
      id: '5',
      sectionName: 'Food',
      title: 'Đồ ăn Hà Giang',
      thumbnail: '/images/food_7.jpg',
      place: 'Hà Giang',
      author: 'James',
      createdAt: '2022-01-01',
      avatar: '/images/avatar1.jpg',
      slug: '/',
    },
  ];

  const features = [
    {
      icon: <SmileOutlined style={{ fontSize: '48px', color: '#FFCB45' }} />,
      title: `${t('realisticExperiences')}`,
      description: `${t('textExperiences')}`,
    },
    {
      icon: <FlagOutlined style={{ fontSize: '48px', color: '#FFCB45' }} />,
      title: `${t('seamlessBooking')}`,
      description: `${t('textBooking')}`,
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: '48px', color: '#FFCB45' }} />,
      title: `${t('personalizedRecommendations')}`,
      description: `${t('textRecommended')}`,
    },
    {
      icon: <StarOutlined style={{ fontSize: '48px', color: '#FFCB45' }} />,
      title: `${t('customTravelPlans')}`,
      description: `${t('textPlans')}`,
    },
  ];

  const listVideo = [
    {
      id: '1',
      title: 'Video 1',
      video: 'https://www.youtube.com/embed/SCFpA7LxWH4',
      description: 'Video 1 description',
    },
  ];
  return (
    <Suspense fallback={<Spin spinning fullscreen />}>
      <MainClient>
        {/* phần banner */}
        <div className="wrapper-home-page-banner">
          <div className="wrapper-home-page-banner-image">
            {infoBanner.length > 0 && (
              <Banner
                loading
                data={
                  infoBanner?.map((item: any) => ({
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
            )}
          </div>

          {/* phần search */}
          <div className="wrapper-search-bar">
            <div className="wrapper-search-bar-input-module">
              <Input
                type="search"
                className="base-input-module"
                placeholder={`${t('titleSearch')}`}
                onChange={handleInputChange}
                onKeyPress={(e) => handleKeyPress(e)}
                value={searchTerm}
                suffix={
                  <Button type="link" icon={<SearchIcon />} onClick={handleSearchButtonClick} />
                }
              />
            </div>
          </div>
        </div>

        <DestinationComponent />

        {/* di chuyển */}
        <SectionHead
          miniTitle={t('itemPopular')}
          description="Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands."
          title={t('itemTransport')}
          titleIsLeft
        />

        <div className="container wrapper-home-page-transports">
          <Row gutter={[20, 20]}>
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              className="wrapper-home-page-transports-content"
            >
              {infoTransports.map((item) => (
                <Flex
                  key={item.id}
                  gap={24}
                  align="center"
                  justify={(infoTransports.indexOf(item) + 1) % 2 ? 'flex-end' : 'flex-start'}
                >
                  <div className="wrapper-home-page-transports-content-order">
                    0{infoTransports.indexOf(item) + 1}
                  </div>
                  <div className="wrapper-home-page-transports-content-btn">{item.title}</div>
                </Flex>
              ))}
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Transports
                data={
                  infoBanner?.map((item: any) => ({
                    id: uuidv4(),
                    image: item?.image,
                    width: 800,
                    height: 800,
                  })) || []
                }
                loading
              />
            </Col>
          </Row>
        </div>

        {/* Stay */}
        <SectionHead
          miniTitle={t('itemPerfect')}
          description="Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands."
          title={t('itemStay')}
          titleIsLeft
        />
        <div className="container wrapper-home-page-stays">
          <CarouselAnt {...carouselSectionSettings}>
            {dataMockStays.map((item) => (
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
            ))}
          </CarouselAnt>
          <div className="btn-load-more">
            <CustomButton
              type="primary"
              onClick={() => {
                router.push('/');
              }}
            >
              Load more stays
            </CustomButton>
          </div>
        </div>

        {/* Blogs food */}
        <SectionHead
          miniTitle="Blog"
          description="Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands."
          title={t('itemCuisine')}
          titleIsLeft
        />
        <div className="container wrapper-home-page-blogs">
          <Row gutter={[0, 16]} className="wrapper-home-page-blogs-container">
            <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={16} className="blogs-left">
              {dataMockBlogs?.[0] && (
                <div className="blogs-left-content" aria-hidden onClick={() => router.push('/')}>
                  <img className="thumbnail-left" src={dataMockBlogs?.[0].thumbnail} alt="" />
                  <div className="shadow" />
                  <div className="blogs-left-content-title">
                    <h6>{dataMockBlogs?.[0].sectionName}</h6>
                    <h3>{dataMockBlogs?.[0].title}</h3>
                    <Flex align="center" className="avatar">
                      <Avatar
                        size={{ xs: 32, sm: 32, md: 25, lg: 32, xl: 40, xxl: 100 }}
                        src={dataMockBlogs?.[0].avatar}
                      />
                      <div className="author">
                        <p>{dataMockBlogs?.[0].author}</p>
                        <p>{dataMockBlogs?.[0].createdAt}</p>
                      </div>
                    </Flex>
                  </div>
                  <div className="item-btn">
                    <RightOutlined />
                  </div>
                </div>
              )}
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} className="blogs-right">
              <CarouselAnt
                dotPosition={isMobile ? 'left' : 'bottom'}
                {...carouselBlogSettings}
                style={{ height: 500 }}
              >
                {dataMockBlogs
                  ?.filter((_, index) => index !== 0)
                  .map((item) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={item.id}>
                      <div
                        className="blogs-right-content-item"
                        aria-hidden
                        onClick={() => router.push('/')}
                      >
                        <img className="thumbnail-right" src={item.thumbnail} alt="" />
                        <div className="blogs-right-content-item-title">
                          <h6>{item.sectionName}</h6>
                          <h3>{item.title}</h3>
                          <Flex align="center" className="avatar">
                            <Avatar
                              size={{ xs: 26, sm: 26, md: 20, lg: 26, xl: 30, xxl: 60 }}
                              src={item.avatar}
                            />
                            <div className="author">
                              <p>{item.author}</p>
                              <p>{item.createdAt}</p>
                            </div>
                          </Flex>
                        </div>
                      </div>
                    </div>
                  ))}
              </CarouselAnt>
            </Col>
          </Row>
          <div className="btn-load-more">
            <CustomButton
              type="primary"
              onClick={() => {
                router.push('/');
              }}
            >
              Load more blogs
            </CustomButton>
          </div>
        </div>

        {/* Gía trị */}
        <SectionHead
          miniTitle={t('itemValues')}
          description="Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands."
          title={t('ourValues')}
          titleIsLeft
        />
        <div className="container wrapper-home-page-values">
          <div>
            <Row gutter={[16, 16]} justify="center">
              {features.map((feature, index) => (
                <Col key={index} xs={24} sm={12} md={6} className="values-col">
                  <div className="values-card">
                    {feature.icon}
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Kinh nghiệm */}
        <SectionHead
          miniTitle="Blog"
          description="Product Quality Is Our Priority, And Always Guarantees Halal And Safety Until It Is In Your Hands."
          title={t('itemExperiences')}
          titleIsLeft
        />
        <div className="container wrapper-home-page-stays">
          <CarouselAnt {...carouselSectionSettings}>
            {dataMockEx.map((item) => (
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
            ))}
          </CarouselAnt>
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

        {listVideo?.map((item: any) => (
          // eslint-disable-next-line react/jsx-key
          <div className="wrapper-banner-video">
            {/* <video
              ref={myVideoBannerRef}
              // controls
              muted
              playsInline
              data-inline-media
              loop
              preload="metadata"
              autoPlay={false}
              // role="img"
            >
              <source src={`${item?.video}#t=0.001`} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video> */}
            <iframe
              width="100%"
              height="550"
              src={`${item?.video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </MainClient>
    </Suspense>
  );
};

export default HomePage;
