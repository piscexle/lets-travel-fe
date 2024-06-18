'use client';

import { Carousel as CarouselAnt } from 'antd';
import Skeleton from 'react-loading-skeleton';
import { motion } from 'framer-motion';

import './style.scss';
import { checkTypeFile } from '@/utils/string.helper';
import { FileTypeEnum } from '@/config/constant';
import React from 'react';
import Image from 'next/image';
import { createRGBDataURL } from '@/utils/createRGBDataURL';
import { useRouter } from 'next/navigation';
import CustomButton from '../Button/CustomButton';

type Props = {
  dataCarousel: {
    image: string;
    id: string;
    title?: string;
    description?: string;
    buttonLink?: string;
  }[];
  className?: string;
  classNameChild?: string;
  classNameLoading?: string;
  isComponentChild?: boolean;
  loading: boolean;
};

const motionSetting = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 1 },
};

const Carousel: React.FC<Props> = ({
  className,
  classNameChild,
  classNameLoading,
  dataCarousel,
  isComponentChild,
  loading,
  ...rest
}: Props) => {
  const router = useRouter();
  return (
    <CarouselAnt className={className} {...rest}>
      {dataCarousel.length === 0 && loading ? (
        <Skeleton className={classNameLoading} />
      ) : (
        dataCarousel?.map((imageSlide) => {
          // check type file
          const typeFile = checkTypeFile(imageSlide.image);
          return typeFile !== FileTypeEnum.video ? (
            <div className={classNameChild} key={imageSlide.id}>
              <Image
                src={imageSlide.image}
                alt=""
                fill
                placeholder="blur"
                blurDataURL={createRGBDataURL(199, 199, 199)}
                sizes="100%"
                priority
              />
              <div className="carousel-content">
                {imageSlide.title ? (
                  <div className="carousel-content-title-item">
                    <motion.h3 {...motionSetting}>{imageSlide.title}</motion.h3>
                  </div>
                ) : (
                  ''
                )}
                {imageSlide.description ? (
                  <div className="carousel-content-description-item">
                    <motion.h6 {...motionSetting} transition={{ duration: 1, delay: 1 }}>
                      {imageSlide.description}
                    </motion.h6>
                  </div>
                ) : (
                  ''
                )}
                {imageSlide.buttonLink ? (
                  <div className="carousel-content-button-item">
                    <motion.div {...motionSetting} transition={{ duration: 1, delay: 1 }}>
                      <CustomButton
                        type="primary"
                        onClick={() => {
                          router.push(`${imageSlide.buttonLink}`);
                        }}
                      >
                        Get Discover
                      </CustomButton>
                    </motion.div>
                  </div>
                ) : (
                  ''
                )}
              </div>
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
};

export default Carousel;
