'use client';

import { MainClient } from '@/layouts/MainClient';
import React, { useEffect } from 'react';
import BannerPage from '@/components/BannerPage';
import { useAppDispatch, useAppSelector } from '@/store';
import { useLocale, useTranslations } from 'next-intl';
import { getInfoBanner } from '@/store/banner/banner.action';
import { getListTypeNewsAction } from '@/store/news/news.action';
import './style.scss';
import { Col, Flex, Row, Typography } from 'antd';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const NewsPage = () => {
  const { infoBanner } = useAppSelector((state) => state.bannerSlice);
  const { listTypeNews } = useAppSelector((state) => state.newsSlice);
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common');

  useEffect(() => {
    dispatch(getInfoBanner({ menuKey: 'NEWS' }));
    dispatch(getListTypeNewsAction({
      order: '',
      page: 1,
      take: 50,
      searchKey: '',
      isActive: true
    }));
  }, [dispatch]);

  return (
    <MainClient>
      <BannerPage
        hindTile={infoBanner.hindTitle?.[locale]}
        image={infoBanner?.images}
        description={infoBanner.description?.[locale]}
      />
      <div className="container news-container">
        <div className="news-container-content">
          <h1>{t('itemNews')}</h1>
          <Flex gap={30}>
            <Row gutter={20}>
              {listTypeNews.data.map((el) => (
                <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={24} key={el.id}>
                  <div
                    className="news-item"
                    onClick={() => router.push(`${pathname}/${el.slug}`)}
                    aria-hidden="true"
                  >
                    <div className="news-image">
                      <Image src={el.thumbnail} alt="" width={300} height={400} />
                    </div>
                    <h2>{el.title?.[locale] || ''}</h2>
                    <Typography.Paragraph
                      ellipsis={{ rows: 2, symbol: ' ' }}
                      className="news-desc"
                    >
                      {el.description?.[locale] || ''}
                    </Typography.Paragraph>
                  </div>
                </Col>
              ))}
            </Row>
          </Flex>
        </div>
      </div>
    </MainClient>
  );
};

export default NewsPage;
