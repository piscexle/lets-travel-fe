import React, { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useAppDispatch, useAppSelector } from '@/store';
import { getInfoBanner } from '@/store/banner/banner.action';
import BannerPage from '@/components/BannerPage';
import WorkItemsCard from './WorkItemsCard/WorkItemsCard';
import './style.scss';

const WorkPage = () => {
  const { infoBanner } = useAppSelector((state) => state.bannerSlice);
  const dispatch = useAppDispatch();
  const locale = useLocale();
  useEffect(() => {
    dispatch(getInfoBanner({ menuKey: 'PROJECT' }));
  }, [dispatch]);

  return (
    <div className="work-page-container">
      <BannerPage
        hindTile={infoBanner.hindTitle?.[locale]}
        image={infoBanner?.images}
        description={infoBanner.description?.[locale]}
      />
      <WorkItemsCard />
    </div>
  );
};
export default WorkPage;
