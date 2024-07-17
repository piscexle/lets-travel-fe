import Carousel from '@/components/Carousel/Carousel';
import React from 'react';
import './style.scss';

interface Props {
  data: {
    image: string;
    id: string;
    width: number;
    height: number;
  }[];
  loading: boolean;
}

const carouselPartnerSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplaySpeed: 5000,
  autoplay: true,
  // prevArrow: <PrevArrow />,
  // nextArrow: <NextArrow />,
};

const Transports = ({ data, loading }: Props) => (
  <Carousel
    className="carousel-transports-page"
    classNameChild="carousel-transports-page-child"
    classNameLoading="carousel-transports-page-loading"
    dataCarousel={data?.map((item) => ({
      image: item.image as string,
      id: item.id as string,
      width: item.width,
      height: item.height,
    }))}
    isComponentChild
    loading={loading}
    {...carouselPartnerSettings}
  />
);

export default Transports;
