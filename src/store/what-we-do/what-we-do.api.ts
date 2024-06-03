import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { ParamGetWhatWeDo, ResponseResult } from './what-we-do.type';

const customer = {
  getAllWhatWeDo(): Promise<ResponseResult> {
    const url = '/what-we-dos/all';
    return instanceAxios.get(url);
  },
  getListWhatWeDo(params: ParamGetWhatWeDo): Promise<ResponseResult> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/fields?${newParams}`;
    return instanceAxios.get(url);
  },
};

export default customer;
