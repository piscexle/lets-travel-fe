import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { GetCareerResponse, ParamGetCareer, ValueApply } from './career.type';

const career = {
  getListCareer(params: ParamGetCareer): Promise<GetCareerResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/careers?${newParams}`;
    return instanceAxios.get(url);
  },
  applyJob(values: ValueApply): Promise<GetCareerResponse> {
    const url = '/apply-jobs';
    return instanceAxios.post(url, values);
  },
};

export default career;
