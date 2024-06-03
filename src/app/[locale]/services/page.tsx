'use client';

import { MainClient } from '@/layouts/MainClient';
import React, { useEffect, useState } from 'react';
import BannerPage from '@/components/BannerPage';
import { getDataServices, getDetailServices } from '@/store/services/services.action';
import { useAppDispatch, useAppSelector } from '@/store';
import { useLocale, useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { getInfoBanner } from '@/store/banner/banner.action';
import { ItemBanner } from '@/store/banner/banner.type';
import './style.scss';
import { Carousel, Flex } from 'antd';
import Image from 'next/image';
import csx from 'classnames';
import { NextArrow, PrevArrow } from '@/components/Carousel/ArrowCarousel';
import { useRouter } from '@/navigation';

const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  draggable: true,
  autoplaySpeed: 3000,
  autoplay: false,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
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

const ServicesPage = () => {
  const { detail, services } = useAppSelector((state) => state.serviceSlice);
  const { infoBanner } = useAppSelector((state) => state.bannerSlice);
  const [windowWidth, setWindowWidth] = useState(0);
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const params = useParams();

  const [banner, setBanner] = useState<ItemBanner>();
  const t = useTranslations('common');
  const router = useRouter();

  useEffect(() => {
    dispatch(getInfoBanner({ menuKey: 'SERVICE' }));
    dispatch(getDataServices({ page: 1, take: 50, order: 'ASC', searchKey: '' }));
  }, [dispatch]);

  useEffect(() => {
    if (params.slug) {
      dispatch(getDetailServices({ id: params.slug as string }));
    }
  }, [params.slug, dispatch]);

  useEffect(() => {
    if (!params.slug && infoBanner.id) {
      setBanner(infoBanner);
    }
    if (params.slug && detail.id) {
      setBanner({
        id: detail.id,
        images: detail.imageBanner,
        title: detail.title,
        hindTitle: detail.title,
        description: detail.description,
      } as ItemBanner);
    }
  }, [params.slug, detail, infoBanner]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    setWindowWidth(window.innerWidth);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const firstRow = services?.slice(0, 2);
  const secondRow = services?.slice(2, services?.length);

  return (
    <MainClient>
      <BannerPage
        hindTile={banner?.hindTitle?.[locale] as string}
        image={banner?.images as string}
        description={banner?.description?.[locale] || ''}
      />
      <div className="container services-container">
        <div className="services-content">
          <h1>{t('itemServices')}</h1>
          <div className="services-items">
            {services.length <= 5 && windowWidth > 576 && (
              <>
                <div className="items-first-row">
                  {firstRow.map((el) => (
                    <Flex key={el.id} justify="center">
                      <div
                        className={csx('block-services-item', {
                          'services-active': el.id === params.slug,
                        })}
                        onClick={() =>
                          router.push({
                            pathname: '/services/[slug]',
                            params: { slug: el.id },
                          })
                        }
                        aria-hidden="true"
                      >
                        <Image src={el.icon} width={90} height={90} quality={100} alt="" />
                        <p>{el.title?.[locale]}</p>
                      </div>
                    </Flex>
                  ))}
                </div>
                <div className="items-second-row">
                  {secondRow.map((el) => (
                    <Flex key={el.id} justify="center">
                      <div
                        className={csx('block-services-item', {
                          'services-active': el.id === params.slug,
                        })}
                        onClick={() =>
                          router.push({
                            pathname: '/services/[slug]',
                            params: { slug: el.id },
                          })
                        }
                        aria-hidden="true"
                      >
                        <Image src={el.icon} width={90} height={90} quality={100} alt="" />
                        <p>{el.title?.[locale]}</p>
                      </div>
                    </Flex>
                  ))}
                </div>
              </>
            )}
            {services.length <= 5 && windowWidth <= 576 && (
              <div className="items-second-row-carousel">
                <Carousel {...carouselSettings} arrows={false}>
                  {services.map((el) => (
                    <div key={el.id}>
                      <Flex justify="center">
                        <div
                          className={csx('block-services-item', {
                            'services-active': el.id === params.slug,
                          })}
                          onClick={() =>
                            router.push({
                              pathname: '/services/[slug]',
                              params: { slug: el.id },
                            })
                          }
                          aria-hidden="true"
                        >
                          <Image src={el.icon} width={90} height={90} quality={100} alt="" />
                          <p>{el.title?.[locale]}</p>
                        </div>
                      </Flex>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
            {services.length > 5 && windowWidth > 576 && (
              <>
                <div className="items-first-row">
                  {firstRow.map((el) => (
                    <Flex key={el.id} justify="center">
                      <div
                        className={csx('block-services-item', {
                          'services-active': el.id === params.slug,
                        })}
                        onClick={() =>
                          router.push({
                            pathname: '/services/[slug]',
                            params: { slug: el.id },
                          })
                        }
                        aria-hidden="true"
                      >
                        <Image src={el.icon} width={90} height={90} quality={100} alt="" />
                        <p>{el.title?.[locale]}</p>
                      </div>
                    </Flex>
                  ))}
                </div>
                <div className="items-second-row-carousel">
                  <Carousel {...carouselSettings} arrows>
                    {secondRow.map((el) => (
                      <div key={el.id}>
                        <Flex justify="center">
                          <div
                            className={csx('block-services-item', {
                              'services-active': el.id === params.slug,
                            })}
                            onClick={() =>
                              router.push({
                                pathname: '/services/[slug]',
                                params: { slug: el.id },
                              })
                            }
                            aria-hidden="true"
                          >
                            <Image src={el.icon} width={90} height={90} quality={100} alt="" />
                            <p>{el.title?.[locale]}</p>
                          </div>
                        </Flex>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </>
            )}
            {services.length > 5 && windowWidth <= 576 && (
              <div className="items-second-row-carousel">
                <Carousel {...carouselSettings} arrows={false}>
                  {services.map((el) => (
                    <div key={el.id}>
                      <Flex justify="center">
                        <div
                          className={csx('block-services-item', {
                            'services-active': el.id === params.slug,
                          })}
                          onClick={() =>
                            router.push({
                              pathname: '/services/[slug]',
                              params: { slug: el.id },
                            })
                          }
                          aria-hidden="true"
                        >
                          <Image src={el.icon} width={90} height={90} quality={100} alt="" />
                          <p>{el.title?.[locale]}</p>
                        </div>
                      </Flex>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainClient>
  );
};

export default ServicesPage;
