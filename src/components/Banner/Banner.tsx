import React from 'react';
import './style.scss';
import Carousel from '../Carousel/Carousel';

interface Props {
  data: {
    id: string;
    image: string;
    title?: string;
    description?: string;
    buttonLink?: string;
  }[];
  carouselBannerSettings: any;
  loading: boolean;
}

const Banner = ({ data, loading, carouselBannerSettings }: Props) => (
  <Carousel
    draggable
    className="carousel-banner-page"
    classNameChild="carousel-banner-page-child"
    classNameLoading="carousel-banner-page-loading"
    dataCarousel={data.map((item) => ({
      id: item.id as string,
      image: item.image,
      title: item.title,
      description: item.description,
      buttonLink: item.buttonLink,
    }))}
    isComponentChild
    loading={loading}
    {...carouselBannerSettings}
  />
);

export default Banner;
