import { Button, Empty } from 'antd';
import React from 'react';
import './style.scss';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Index = () => {
  const router = useRouter();
  const t = useTranslations('common');

  return (
    <Empty
      image="/images/empty.jpg"
      imageStyle={{ height: 100 }}
      description={t('noData')}
      className="container-empty"
    >
      <Button type="primary" onClick={() => router.push('/')}>
        {t('goHomePage')}
      </Button>
    </Empty>
  );
};

export default Index;
