import { instanceAxios } from '@/config/axios';
import { GetBusinessResponse } from './business.type';

const business = {
  getInfoBusiness(): Promise<GetBusinessResponse> {
    const url = `/businesses`;
    return instanceAxios.get(url);
  },
};

export default business;
