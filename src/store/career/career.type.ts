import { AxiosResponse } from 'axios';
import { MetaPagination } from '@/config/constant';
import { LocaleType } from '../translation/translation.type';

export type GetCareerResponse = AxiosResponse<{
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

export type ParamGetCareer = {
  order: '' | 'ASC' | 'DESC';
  page: number;
  take: number;
  searchKey: string;
};

export type ItemCareer = {
  id: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  title: LocaleType;
  description: LocaleType;
  content: LocaleType;
};

export interface CareerState {
  data: ItemCareer[];
  meta: MetaPagination;
  load: boolean;
  error: string;
}

export interface ValueApply {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
  cvFile: string;
  careerId: string;
}
