import { MetaPagination } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { LocaleType } from '../translation/translation.type';

export type ItemBusiness = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  gmail: string;
  years: number;
  clients: number;
  personnel: number;
  projects: number;
  establish: string;
  phoneNumber: string;
  facebook: string;
  zalo: string;
  youtube: string;
  tiktok: string;
  address: string;
  telegram: string;
  informationText: LocaleType;
  overviewText: LocaleType;
};

export type GetBusinessResponse = AxiosResponse<{
  statusCode: number;
  data: ItemBusiness;
  meta: MetaPagination;
}>;

export interface BusinessState {
  loading: boolean;
  infoBusiness: ItemBusiness;
  error: string;
}
