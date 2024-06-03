import React from 'react';
import './style.scss';
import { useAppSelector } from '@/store';
import { useLocale, useTranslations } from 'next-intl';
import CountUp from 'react-countup';
import { Flex } from 'antd';
import HeaderRectangle from '@/components/SectionHead/SectionHead';
import dayjs from 'dayjs';

const Index = () => {
  const { infoBusiness } = useAppSelector((state) => state.businessSlice);
  const t = useTranslations('common');
  const locale = useLocale();

  const result = dayjs().diff(dayjs(infoBusiness?.establish), 'months');

  return (
    <div className="home-overview">
      <HeaderRectangle title={t('itemOverview')} titleIsRight={false} />
      <Flex align="center" justify="center" className="quick-fact-container">
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
                <CountUp end={result} duration={5} enableScrollSpy />
              </span>
              <span>{t('month')}</span>
            </h4>
            <h4 className="text-green text-card">
              <span>+</span>
              <span className="count-up">
                <CountUp end={infoBusiness.clients} duration={5} enableScrollSpy />
              </span>
              <span>{t('client')}</span>
            </h4>
            <h4 className="text-yellow text-card">
              <span>+</span>
              <span className="count-up">
                <CountUp end={infoBusiness?.personnel} duration={5} enableScrollSpy />
              </span>
              <span>{t('textPersonnel')}</span>
            </h4>
            <h4 className="text-blue text-card">
              <span>+</span>
              <span className="count-up">
                <CountUp end={infoBusiness.projects} duration={5} enableScrollSpy />
              </span>
              <span>{t('project')}</span>
            </h4>
          </div>
          <p className="text-intro">{infoBusiness?.overviewText?.[locale]}</p>
        </div>
      </Flex>
    </div>
  );
};

export default Index;
