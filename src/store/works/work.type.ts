import { AxiosResponse } from 'axios';
import { MetaPagination } from '@/config/constant';
import { LocaleType } from '../translation/translation.type';

export type GetWorkResponse = AxiosResponse<{
  statusCode: number;
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    thumbnail: string;
    title: LocaleType;
    description: LocaleType;
    content: LocaleType;
  };
  meta: MetaPagination;
}>;

export type ParamGetWork = {
  order: '' | 'ASC' | 'DESC';
  page: number;
  take: number;
  searchKey: string;
};

export type ItemWork = {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  title: LocaleType;
  description: LocaleType;
  content: LocaleType;
};

export interface WorkState {
  data: ItemWork[];
  meta: MetaPagination;
  load: boolean;
  error: string;
}
