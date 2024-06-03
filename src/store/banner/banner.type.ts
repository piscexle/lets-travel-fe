import { MetaPagination } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { LocaleType } from '../translation/translation.type';

export type ParamGetBanners = {
  menuKey: 'HOME' | 'PROJECT' | 'OUR_CUSTOMER' | 'ABOUT_US' | 'CAREER' | 'NEWS' | 'SERVICE';
};

export type ItemBanner = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  images: string;
  title: LocaleType;
  hindTitle: LocaleType;
  description: LocaleType;
};

export type GetBannerResponse = AxiosResponse<{
  statusCode: number;
  data: ItemBanner;
  meta: MetaPagination;
}>;

export interface BannerState {
  loading: boolean;
  infoBanner: ItemBanner;
  error: string;
}
