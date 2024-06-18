import { useInView, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import Carousel from '@/components/Carousel/Carousel';
import './style.scss';
import { useAppDispatch, useAppSelector } from '@/store';
import { getTechnicalSkill } from '@/store/technical-skill/technical-skill.action';
import { useTranslations } from 'next-intl';

const TechnicalSkillsCardComponent = () => {
  const { data } = useAppSelector((state) => state.technicalSkillSlice);
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const t = useTranslations('common');
  const isInView = useInView(ref);
  const motionSetting = {
    initial: { opacity: 0, x: '-100%' },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' },
    transition: { duration: 1 },
  };

  useEffect(() => {
    dispatch(getTechnicalSkill());
  }, [dispatch]);

  const settings = {
    dots: false,
    infinite: data.length > 5,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplaySpeed: 3000,
    autoplay: data.length > 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: data.length > 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: data.length > 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: data.length > 2,
        },
      },
    ],
  };

  return (
    <div ref={ref} className="technical-skills-card">
      <div className="technical-skills-header">
        <div className="rectangle">
          <motion.div {...motionSetting} className="rectangle-top" />
          <motion.div {...motionSetting} className="rectangle-bottom" />
        </div>
        <h3>{t('technicalSkill')}</h3>
      </div>

      <div className="technical-skills-main">
        <Carousel
          className="carousel-main"
          dataCarousel={data.map((item) => ({
            id: item.id as string,
            image: item.image as string,
          }))}
          {...settings}
          loading
        />
      </div>
    </div>
  );
};
export default TechnicalSkillsCardComponent;
