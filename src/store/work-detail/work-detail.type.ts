import { AxiosResponse } from 'axios';
import { LocaleType } from '../translation/translation.type';

export type GetWorkDetailResponse = AxiosResponse<{
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
}>;

export type ParamGetWorkDetail = {
  id: string;
};

export type ItemWorkDetail = {
  id: string;
  createdAt: string;
  updatedAt: string;
  thumbnail: string;
  title: LocaleType;
  description: LocaleType;
  content: LocaleType;
};

export interface WorkDetailState {
  data: ItemWorkDetail;
  load: boolean;
  error: string;
}
