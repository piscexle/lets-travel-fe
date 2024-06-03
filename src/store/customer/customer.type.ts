import { MetaPagination } from '@/config/constant';
import { AxiosResponse } from 'axios';

export type GetCustomerResponse = AxiosResponse<{
  statusCode: number;
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    image: string;
    voteStar: number;
    message: string;
    position: string;
    avatar: string;
  };
  meta: MetaPagination;
}>;

export type ParamGetCustomer = {
  order: '' | 'ASC' | 'DESC';
  page: number;
  take: number;
  searchKey: string;
  whatWeDoId?: string;
};

export type ItemCustomer = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  image: string;
  isActive: boolean;
};

export type ItemCustomerFeedback = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  avatar: string;
  image: string;
  position: string;
  message: string;
  voteStar: number;
};

export interface CustomerState {
  data: ItemCustomer[];
  listCustomerFeedback: {
    data: ItemCustomerFeedback[];
    meta: MetaPagination;
    error: string;
    load: boolean;
  };
  meta: MetaPagination;
  load: boolean;
  error: string;
  dataCustomerByWhatWeDo: {
    data: ItemCustomer[];
    meta: MetaPagination;
    error: string;
    load: boolean;
  };
}
