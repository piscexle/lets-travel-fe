'use client';

import React, { useEffect, useRef, useState } from 'react';
import BannerPage from '@/components/BannerPage';
import { MainClient } from '@/layouts/MainClient';
import { useAppDispatch, useAppSelector } from '@/store';
import { getInfoBanner } from '@/store/banner/banner.action';
import { Button, Col, Flex, Row } from 'antd';
import './style.scss';
import { useLocale } from 'next-intl';
import { getInfoAboutUs } from '@/store/about-us/about-us.action';
import { extractYoutubeEmbedId } from '@/utils/string.helper';
import { PauseCircleOutlined, PlayCircleOutlined } from '@ant-design/icons';

const Page = () => {
  const { infoBanner } = useAppSelector((state) => state.bannerSlice);
  const { infoAboutUs } = useAppSelector((state) => state.aboutUsSlice);
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const myVideoBannerRef = useRef<any>(null);
  const [videoSwitch, setVideoSwitch] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getInfoBanner({ menuKey: 'ABOUT_US' }));
    dispatch(getInfoAboutUs());
  }, [dispatch]);

  const handlePlayPause = () => {
    const video = myVideoBannerRef.current;

    if (video?.paused) {
      setVideoSwitch(true);
      video.play();
    } else {
      setVideoSwitch(false);
      video.pause();
    }
  };

  return (
    <MainClient>
      <BannerPage
        hindTile={infoBanner.hindTitle?.[locale]}
        image={infoBanner?.images}
        description={infoBanner.description?.[locale]}
      />
      <div className="container-about-us">
        <Row gutter={30} className="about-us-row">
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24}>
            <div className="block-left">
              <Flex vertical>
                <h1>{infoAboutUs.title?.[locale]}</h1>
                <div
                  dangerouslySetInnerHTML={{ __html: infoAboutUs?.content?.[locale] }}
                  className="about-text-content  sun-editor-editable sun-editor-editable-override"
                />
              </Flex>
            </div>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={24} sm={24} xs={24} className="about-us-col-right">
            {infoAboutUs.video && infoAboutUs.video?.includes('youtu') && (
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${extractYoutubeEmbedId(infoAboutUs?.video)}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {infoAboutUs.video && !infoAboutUs.video?.includes('youtu') && (
              <div className="about-us-video">
                <video
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
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <source src={`${infoAboutUs.video}#t=0.001`} type="video/mp4" />
                  Your browser does not support HTML5 video.
                </video>
                <div className="about-us-video-btn">
                  <Button
                    size="large"
                    type="primary"
                    icon={videoSwitch ? <PauseCircleOutlined /> : <PlayCircleOutlined />}
                    onClick={handlePlayPause}
                  />
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
    </MainClient>
  );
};

export default Page;
