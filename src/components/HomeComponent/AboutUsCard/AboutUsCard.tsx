import { Carousel } from 'antd';
import React from 'react';
import './style.scss';
import { useTranslations } from 'next-intl';

type Types = {
  id?: string;
  title?: string;
  content?: string;
};

const AboutUsCardComponent = () => {
  const t = useTranslations('common');
  const dataMock: Types[] = [
    {
      id: '1',
      title: t('titleVision'),
      content: t('contentVision'),
    },
    {
      id: '2',
      title: t('titleMission'),
      content: t('contentMission'),
    },
    {
      id: '3',
      title: t('titleCoreValues'),
      content: t('contentCoreValues'),
    },
    {
      id: '4',
      title: t('titleDevelopmentHistory'),
      content: t('contentDevelopmentHistory'),
    },
  ];
  return (
    <div className="about-us">
      <picture className="about-us-image">
        <source srcSet="/images/tech_background.jpg" type="image/jpg" />
        <img className="about-us-image" src="/images/tech_background.jpg" alt="about us computer" />
      </picture>
      <div className="about-us-opacity-layer" />

      <div className="carousel-container">
        <Carousel className="carousel-main" autoplay={false}>
          {dataMock.map((item) => (
            <div className="carousel-content-padding" key={item.id}>
              <h3 className="carousel-container-title">{item.title}</h3>
              <span className="carousel-container-description">{item.content}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUsCardComponent;
