import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import './style.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/store';
import { getAllOurTeam } from '@/store/our-team/our-team.action';
import { useTranslations } from 'next-intl';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const OurTeamCardComponent = ({ id }: { id: string }) => {
  const { data } = useAppSelector((state) => state.ourTeamSlice);
  const dispatch = useAppDispatch();
  const t = useTranslations('common');
  const carouselCustomerSettings = {
    responsive: {
      0: {
        center: false,
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  useEffect(() => {
    dispatch(getAllOurTeam());
  }, [dispatch]);

  return (
    <div className="our-team" id={id}>
      <h3>{t('ourTeam')}</h3>

      {data.length > 0 ? (
        <OwlCarousel
          className="carousel-member"
          center={data.length > 2}
          loop={data.length > 2}
          dots={false}
          // autoWidth
          autoplay
          autoplaySpeed={300}
          margin={8}
          nav={data.length > 3}
          responsive={carouselCustomerSettings.responsive}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className={`${
                data.length > 2 ? 'carousel-customer-item' : 'carousel-customer-item-child'
              }`}
            >
              <Image
                width={150}
                height={150}
                src={item.avatar.includes('http') ? item.avatar : '/images/logo.svg'}
                alt={item.name as string}
                quality={100}
              />
              <div className="member-info">
                <p className="member-name">{item.name}</p>
                <p className="member-position">{item.position}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      ) : null}
    </div>
  );
};
export default OurTeamCardComponent;
