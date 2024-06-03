'use client';

import { MainClient } from '@/layouts/MainClient';
import { useAppDispatch, useAppSelector } from '@/store';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
import BannerPage from '@/components/BannerPage';
import { getInfoBanner } from '@/store/banner/banner.action';
import { useParams, useRouter } from 'next/navigation';
import { getDetailNewsAction, getListNewsAction } from '@/store/news/news.action';
import './style.scss';
import { Carousel } from 'antd';
import Image from 'next/image';
import { NextArrow, PrevArrow } from '@/components/Carousel/ArrowCarousel';

const DetailNewsPage = () => {
  const { infoBanner } = useAppSelector((state) => state.bannerSlice);
  const { detailNews, listNews } = useAppSelector((state) => state.newsSlice);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const params = useParams();
  const t = useTranslations('common');

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: listNews?.data?.length > 2 ? 3 : listNews?.data?.length,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 5000,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            listNews?.data?.length >= 2 ? 2 : listNews?.data?.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: listNews?.data?.length >= 2 ? 2 : 1,
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

  useEffect(() => {
    dispatch(getInfoBanner({ menuKey: 'NEWS' }));
    if (params?.slug) {
      dispatch(getDetailNewsAction(params.slug as string)).then((res: any) => {
        if (res.payload.data) {
          dispatch(getListNewsAction({
            order: '',
            page: 1,
            take: 10,
            searchKey: '',
            isActive: true
          }));
        }
      });
    }
  }, [dispatch, params?.slug]);

  return (
    <MainClient>
      <BannerPage
        hindTile={infoBanner.hindTitle?.[locale]}
        image={infoBanner?.images}
        description={infoBanner.description?.[locale]}
      />
      <div className="container news-detail-container">
        <div className="news-detail-container-content">
          <h1>{detailNews?.data?.title?.[locale] || ''}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: detailNews.data?.content?.[locale] }}
            className="  sun-editor-editable sun-editor-editable-override"
          />
        </div>
        <div className="related-news">
          <h2>{t('relatedNews')}</h2>
          <Carousel {...carouselSettings}>
            {listNews?.data?.map((el) => (
              <div key={el.id}>
                <div
                  className="related-item"
                  onClick={() => router.push(`/news/${el.slug}`)}
                  aria-hidden="true"
                >
                  <Image src={el.thumbnail} alt="" width={200} height={200} />
                  <div className="related-item-content">
                    <h2>{el.title?.[locale] || ''}</h2>
                    <p className="related-desc">{el.description?.[locale]}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </MainClient>
  );
};

export default DetailNewsPage;
