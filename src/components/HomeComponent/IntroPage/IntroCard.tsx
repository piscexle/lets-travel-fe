'use client';

import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { motion } from 'framer-motion';
import './style.scss';
import { useLocale, useTranslations } from 'next-intl';
import { useAppDispatch, useAppSelector } from '@/store';
import { getInfoBanner } from '@/store/banner/banner.action';
import Image from 'next/image';
import CustomButton from '@/components/Button/CustomButton';
import SendIcon from '@/icons/SendIcons';

const motionSetting = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 1 },
};

const IntroPage = () => {
  const {
    infoBanner: { images, title, description },
  } = useAppSelector((state) => state.bannerSlice);
  const dispatch = useAppDispatch();
  const t = useTranslations('common');
  const locale = useLocale();
  useEffect(() => {
    dispatch(getInfoBanner({ menuKey: 'HOME' }));
  }, [dispatch]);

  return (
    <div className="intro-container">
      <div className="intro-container-blur">
        {images && <Image src={images} width={2000} height={600} alt="" />}
      </div>
      <div className="intro-container-content">
        <Row>
          <Col xxl={8} xl={9} lg={12} md={15} sm={15} xs={24}>
            <div className="intro-title">
              <motion.h3 {...motionSetting}>{title?.[locale]}</motion.h3>
            </div>
            <div className="intro-description">
              <motion.h6 {...motionSetting} transition={{ duration: 1, delay: 1 }}>
                {description?.[locale]}
              </motion.h6>
            </div>
            <motion.div {...motionSetting} transition={{ duration: 1, delay: 1 }}>
              <CustomButton className="intro-button">
                <SendIcon />
                <p className="button-text"> {t('teamHome')}</p>
              </CustomButton>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default IntroPage;
