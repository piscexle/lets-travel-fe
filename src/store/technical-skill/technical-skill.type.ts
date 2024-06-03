import { MetaPagination } from '@/config/constant';
import { AxiosResponse } from 'axios';

export type GetTechnicalSkillResponse = AxiosResponse<{
  statusCode: number;
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    image: string;
  };
  meta: MetaPagination;
}>;

export type ParamGetTechnicalSkill = {
  order: '' | 'ASC' | 'DESC';
  page: number;
  take: number;
  searchKey: string;
};

export type ItemTechnicalSkill = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  image: string;
};

export interface TechnicalSkillState {
  data: ItemTechnicalSkill[];
  meta: MetaPagination;
  load: boolean;
  error: string;
}
