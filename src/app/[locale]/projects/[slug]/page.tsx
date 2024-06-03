'use client';

import { MainClient } from '@/layouts/MainClient';
import React, { useEffect } from 'react';
import './style.scss';
import { useAppDispatch, useAppSelector } from '@/store';
import { useLocale } from 'next-intl';
import { Image } from 'antd';
import { getWorkDetail } from '@/store/work-detail/work-detail.action';
import { useParams } from 'next/navigation';
import BannerPage from '@/components/BannerPage';
import { getInfoBanner } from '@/store/banner/banner.action';

const ProjectDetail = () => {
  const { data } = useAppSelector((state) => state.workDetailSlice);
  const { infoBanner } = useAppSelector((state) => state.bannerSlice);
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const params = useParams();
  useEffect(() => {
    dispatch(getWorkDetail({ id: params.slug as string }));
    dispatch(getInfoBanner({ menuKey: 'PROJECT' }));
  }, [dispatch, params.slug]);

  return (
    <MainClient>
      <BannerPage
        hindTile={infoBanner.hindTitle?.[locale]}
        image={infoBanner?.images}
        description={infoBanner.description?.[locale]}
      />
      <div className="container project-detail">
        {/* <h4>{data?.title?.[locale]}</h4> */}
        <div className="body-project-detail">
          <Image className="image-project-detail" src={data?.thumbnail} alt="" preview={false} />
          <div>
            <h4>{data?.title?.[locale]}</h4>
            <div
              className="text-description   sun-editor-editable sun-editor-editable-override"
              dangerouslySetInnerHTML={{
                __html: data?.content?.[locale] as string,
              }}
            />
          </div>
        </div>
      </div>
    </MainClient>
  );
};

export default ProjectDetail;
