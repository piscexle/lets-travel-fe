import React from 'react';
import './style.scss';
import { useTranslations } from 'next-intl';
// import Image from 'next/image';
import HeaderRectangle from '@/components/SectionHead/SectionHead';
import { Flex, Image } from 'antd';
import CustomButton from '@/components/Button/CustomButton';
import { useRouter } from 'next/navigation';
import PlaceIcon from '@/icons/PlaceIcon';
import CountUp from 'react-countup';

const Destination = () => {
  const t = useTranslations('common');
  // const locale = useLocale();
  const router = useRouter();

  const destinationLove = [
    {
      id: '1',
      title: 'Hạ Long',
      image: '/images/delivery.png',
      countBlog: 20,
      description:
        'Delivery will be on time Delivery will be on time Delivery will be on time Delivery will be on time....',
      buttonLink: '/',
    },
    {
      id: '2',
      title: 'Hạ Long',
      image: '/images/delivery.png',
      countBlog: 20,
      description:
        'Delivery will be on time Delivery will be on time Delivery will be on time Delivery will be on time....',
      buttonLink: '/',
    },
    {
      id: '3',
      title: 'Hạ Long',
      image: '/images/delivery.png',
      countBlog: 20,
      description:
        'Delivery will be on time Delivery will be on time Delivery will be on time Delivery will be on time....',
      buttonLink: '/',
    },
  ];

  return (
    <div className="home-destination">
      <HeaderRectangle
        title={t('itemDestination')}
        titleIsLeft
        miniTitle={t('itemPopular')}
        description="hi dsjdks ndksnd dskdjs"
      />
      <div className="container">
        <Flex
          className="home-destination-content"
          justify="space-between"
          align="center"
          gap={12}
          wrap
        >
          {destinationLove?.map((item) => (
            <div className="home-destination-content-item" key={item.id}>
              <Image alt="" src={item.image} preview={false} />
              <div className="destination-content">
                <h3>{item.title}</h3>
                <p>
                  <PlaceIcon /> <CountUp end={item.countBlog || 0} duration={5} enableScrollSpy />{' '}
                  {t('itemBlog')}
                </p>
                <p className="destination-content-des">{item.description}</p>
                <CustomButton
                  className="destination-content-button"
                  type="primary"
                  onClick={() => {}}
                >
                  Get discover
                </CustomButton>
              </div>
            </div>
          ))}
        </Flex>
        <div className="btn-load-more">
          <CustomButton
            type="primary"
            onClick={() => {
              router.push('/');
            }}
          >
            Load more destinations
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Destination;
