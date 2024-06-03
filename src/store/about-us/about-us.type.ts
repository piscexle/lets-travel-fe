import { AxiosResponse } from 'axios';
import { LocaleType } from '../translation/translation.type';

export type ItemAboutUs = {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: LocaleType;
  content: LocaleType;
  video: string;
};

export type GetAboutUsResponse = AxiosResponse<{
  data: ItemAboutUs;
}>;

export interface AboutUsState {
  loading: boolean;
  infoAboutUs: ItemAboutUs;
  error: string;
}
