'use client';

import React, { useEffect, useState } from 'react';
import { MainClient } from '@/layouts/MainClient';
import './style.scss';
import { useAppDispatch, useAppSelector } from '@/store';
import { Flex, Pagination, PaginationProps } from 'antd';
import { useLocale } from 'next-intl';
import { getListCareer } from '@/store/career/career.action';
import BannerPage from '@/components/BannerPage';
import { getInfoBanner } from '@/store/banner/banner.action';
import EmptyData from '@/components/EmptyData';
import { MetaPagination } from '@/config/constant';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import FormCareer from './form';

const Career = () => {
  const { data, meta } = useAppSelector((state) => state.careerSlice);
  const { infoBanner } = useAppSelector((state) => state.bannerSlice);
  const dispatch = useAppDispatch();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [parameters, setParameters] = useState<MetaPagination>({
    page: Number(searchParams.get('page')) || 1,
    take: Number(searchParams.get('take')) || 3,
  });

  useEffect(() => {
    dispatch(getInfoBanner({ menuKey: 'CAREER' }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      getListCareer({
        page: parameters.page as number,
        order: 'ASC',
        searchKey: '',
        take: parameters.take as number,
      })
    );
    const queryString = cleanAndSerializeQueryParams(parameters);
    router.push(`${pathname}?${queryString}`);
  }, [parameters, router, dispatch, pathname]);

  const onChange: PaginationProps['onChange'] = (pageNumber: number) => {
    setParameters((prev) => ({
      ...prev,
      page: pageNumber,
    }));
  };

  return (
    <MainClient>
      <BannerPage
        hindTile={infoBanner.hindTitle?.[locale]}
        image={infoBanner?.images}
        description={infoBanner.description?.[locale]}
      />
      <div className="container">
        {data.map((item, index) => (
          <FormCareer key={item.id} left={index % 2 === 0} data={item} locale={locale} />
        ))}
        {data.length === 0 ? <EmptyData /> : null}
        {data.length > 0 ? (
          <Flex align="center" justify="center" className="career-pagination">
            <Pagination
              defaultCurrent={meta.page}
              total={meta.itemCount}
              onChange={onChange}
              pageSize={3}
            />
          </Flex>
        ) : null}
      </div>
    </MainClient>
  );
};

export default Career;
