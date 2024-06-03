'use client';

import React from 'react';
import './style.scss';
import Image from 'next/image';
import { Button, Flex } from 'antd';
import { LocaleType } from '@/store/translation/translation.type';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { createRGBDataURL } from '@/utils/createRGBDataURL';

interface Props {
  thumbnail: string;
  slug: string;
  title: LocaleType;
  description: LocaleType;
}

const ItemCard: React.FC<Props> = ({ description, thumbnail, title, slug }) => {
  const locale = useLocale();
  const t = useTranslations('common');
  const router = useRouter();
  const pathname = usePathname();
  const clickDetail = async () => {
    router.push(`${pathname}/${slug}`);
  };

  return (
    <Flex className="box-item" align="center" gap={12}>
      <div className="box-item-image">
        <Image
          className="image-left"
          fill
          placeholder="blur"
          blurDataURL={createRGBDataURL(199, 199, 199)}
          src={thumbnail}
          alt=""
          sizes="100%"
        />
      </div>
      <div className="box-item-content">
        <h4>{title?.[locale]}</h4>
        <h5>{description?.[locale]}</h5>
        <div className="button-card">
          <Button type="primary" className="outline-btn" onClick={clickDetail}>
            {t('readMore')}
          </Button>
        </div>
      </div>
    </Flex>
  );
};

export default ItemCard;
