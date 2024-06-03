import { MetaPagination } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { LocaleType } from '../translation/translation.type';

export type ParamPostCustomer = {
  name: string;
  image: string;
  description: string;
};

export type ParamPutCustomer = {
  name: string;
  image: string;
  description: string;
  id: string;
};

export type PutCustomer = {
  messageCode: string;
};

// export type PutCustomerResponse = AxiosResponse<PutCustomer>;

export type PostCustomerResponse = AxiosResponse<{
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    image: string;
    description: string;
  };
}>;

export type ResponseResult = AxiosResponse<{
  statusCode: number;
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    image: string;
    description: string;
  };
  meta: MetaPagination;
}>;

export type ParamGetWhatWeDo = {
  order: '' | 'ASC' | 'DESC';
  page: number;
  take: number;
  searchKey: string;
};

export type ItemWhatWeDo = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: LocaleType;
  image: string;
  description: LocaleType;
  icon: string;
  slug: string;
};

export interface WhatWeDoState {
  data: ItemWhatWeDo[];
  images: string[];
  meta: MetaPagination;
  load: false;
  error: string;
  dataWhatWeDo: {
    meta: MetaPagination;
    load: false;
    error: string;
    data: ItemWhatWeDo[];
  };
}
