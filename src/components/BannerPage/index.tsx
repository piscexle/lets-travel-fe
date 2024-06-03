import React, { FC } from 'react';
import './style.scss';
import Image from 'next/image';
import { isURLValid } from '@/utils/string.helper';

interface Props {
  hindTile: string;
  description?: string;
  image: string;
}

const Index: FC<Props> = ({ hindTile, image, description }) => (
  <div className=" custom-banner">
    <div className="container custom-banner-content">
      <div className="custom-banner-content-title">
        <h1>{hindTile}</h1>
        <p>{description}</p>
      </div>
    </div>
    <div className="banner-blur">
      {image && isURLValid(image) && <Image src={image} fill alt="" sizes="100%" quality={100} />}
    </div>
  </div>
);

export default Index;
