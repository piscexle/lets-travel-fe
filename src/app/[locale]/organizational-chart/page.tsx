'use client';

import { MainClient } from '@/layouts/MainClient';
import React, { useEffect } from 'react';
import BannerPage from '@/components/BannerPage';
import { useAppDispatch, useAppSelector } from '@/store';
import { getAllOurTeam } from '@/store/our-team/our-team.action';
import { useLocale, useTranslations } from 'next-intl';
import { getInfoBanner } from '@/store/banner/banner.action';
import './style.scss';
import Card from './Card';

const OrganizationalPage = () => {
  const { infoBanner } = useAppSelector((state) => state.bannerSlice);
  const { data } = useAppSelector((state) => state.ourTeamSlice);
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const t = useTranslations('common');
  useEffect(() => {
    dispatch(getInfoBanner({ menuKey: 'ABOUT_US' }));
    dispatch(getAllOurTeam());
  }, [dispatch]);

  return (
    <MainClient>
      <BannerPage
        hindTile={infoBanner.hindTitle?.[locale]}
        image={infoBanner?.images}
        description={infoBanner.description?.[locale]}
      />
      <div className="container container-chart">
        <div className="container-chart-content">
          <div className="org-tree">
            <h1>{t('structure')}</h1>
            {data?.length > 0 && <Card data={data} />}
          </div>
        </div>
      </div>
    </MainClient>
  );
};

export default OrganizationalPage;
