import { AxiosResponse } from 'axios';
import { MetaPagination } from '@/config/constant';
import { LocaleType } from '../translation/translation.type';

export type ItemNews = {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  title: LocaleType;
  description: LocaleType;
  content: LocaleType;
  isActive: boolean;
};

export type GetNewsResponse = AxiosResponse<{
  statusCode: number;
  data: ItemNews[];
  meta: MetaPagination;
}>;

export type GetDetailNewsResponse = AxiosResponse<{
  statusCode: number;
  data: ItemNews;
  meta: MetaPagination;
}>;

export type ParamGetNews = {
  order: '' | 'ASC' | 'DESC';
  page: number;
  take: number;
  searchKey: string;
  isActive: boolean;
};

export interface NewsState {
  listNews: {
    data: ItemNews[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };
  listTypeNews: {
    data: ItemNews[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };
  detailNews: {
    data: ItemNews;
    load: boolean;
    error: string;
  };
  detailTypeNews: {
    data: ItemNews;
    load: boolean;
    error: string;
  };
}
