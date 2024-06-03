import { AxiosResponse } from 'axios';
import { MetaPagination } from '@/config/constant';
import { LocaleType } from '../translation/translation.type';

export type GetOurTeamResponse = AxiosResponse<{
  statusCode: number;
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    position: string;
    description: LocaleType;
  };
  meta: MetaPagination;
}>;

export type ParamGetOurTeam = {
  order: '' | 'ASC' | 'DESC';
  page: number;
  take: number;
  searchKey: string;
};

export type ItemOurTeam = {
  id: string;
  parentId: string;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  position: string;
  avatar: string;
  description: LocaleType;
  children: ItemOurTeam[];
};

export interface OurTeamState {
  data: ItemOurTeam[];
  meta: MetaPagination;
  load: boolean;
  error: string;
}
