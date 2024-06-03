import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import {
  GetDetailNewsResponse,
  GetNewsResponse,
  ParamGetNews,
} from './news.type';

const news = {
  getListNews(params: ParamGetNews): Promise<GetNewsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/news?${newParams}`;
    return instanceAxios.get(url);
  },
  getListTypeNews(params: ParamGetNews): Promise<GetNewsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/news?${newParams}`;
    return instanceAxios.get(url);
  },
  getDetailNews(id: string): Promise<GetDetailNewsResponse> {
    const url = `/news/${id}`;
    return instanceAxios.get(url);
  },
  getDetailTypeNews(id: string): Promise<GetDetailNewsResponse> {
    const url = `/news/${id}`;
    return instanceAxios.get(url);
  },
};

export default news;
