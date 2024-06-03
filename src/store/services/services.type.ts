import { MetaPagination } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { LocaleType } from '../translation/translation.type';

export type ParamGetServices = {
  order: '' | 'ASC' | 'DESC';
  page: number;
  take: number;
  searchKey: string;
};

export type ParamGetServiceDetail = {
  id: string;
};

export type ItemService = {
  id: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  icon: string;
  imageBanner: string;
  title: LocaleType;
  description: LocaleType;
  content: LocaleType;
};

export type GetServicesResponse = AxiosResponse<{
  statusCode: number;
  data: ItemService;
  meta: MetaPagination;
}>;

export type GetServiceDetailResponse = AxiosResponse<{
  detail: ItemService;
}>;

export interface Servicestate {
  loading: boolean;
  services: ItemService[];
  detail: ItemService;
  error: string;
}
