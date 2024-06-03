import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import {
  ParamGetServices,
  GetServicesResponse,
  ParamGetServiceDetail,
  GetServiceDetailResponse,
} from './services.type';

const service = {
  getDataService(params: ParamGetServices): Promise<GetServicesResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/services?${newParams}`;
    return instanceAxios.get(url);
  },
  getDataServiceDetail(params: ParamGetServiceDetail): Promise<GetServiceDetailResponse> {
    const url = `/services/${params.id}`;
    return instanceAxios.get(url);
  },
};

export default service;
