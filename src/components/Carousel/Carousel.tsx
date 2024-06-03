'use client';

import React from 'react';
import { Carousel as CarouselAnt } from 'antd';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { checkTypeFile } from '@/utils/string.helper';
import { FileTypeEnum } from '@/config/constant';
import './style.scss';

type Props = {
  dataCarousel: {
    image: string;
    id: string;
    title?: string;
  }[];
  className?: string;
  classNameChild?: string;
  classNameLoading?: string;
};

const Carousel: React.FC<Props> = ({
  className,
  classNameChild,
  classNameLoading,
  dataCarousel,
  ...rest
}: Props) => (
  <CarouselAnt className={className} {...rest}>
    {dataCarousel.length === 0 ? (
      <Skeleton className={classNameLoading} />
    ) : (
      dataCarousel?.map((imageSlide) => {
        const typeFile = checkTypeFile(imageSlide.image);
        return typeFile !== FileTypeEnum.video ? (
          <div className={classNameChild} key={imageSlide.id}>
            <picture>
              <source srcSet={imageSlide.image} type="image/png" />
              <img src={imageSlide.image} alt="" />
            </picture>
            {imageSlide.title ? <p className="carousel-title-item">{imageSlide.title}</p> : ''}
          </div>
        ) : (
          <div className={classNameChild} key={imageSlide.id}>
            <video src={imageSlide.image} playsInline autoPlay muted loop />
            {imageSlide.title ? <p className="carousel-title-item">{imageSlide.title}</p> : ''}
          </div>
        );
      })
    )}
  </CarouselAnt>
);

export default Carousel;
