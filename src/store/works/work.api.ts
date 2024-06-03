import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { GetWorkResponse, ParamGetWork } from './work.type';

const works = {
  getListWork(params: ParamGetWork): Promise<GetWorkResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/our-works?${newParams}`;
    return instanceAxios.get(url);
  },
};

export default works;
