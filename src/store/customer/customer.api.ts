import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { GetCustomerResponse, ParamGetCustomer } from './customer.type';

const customer = {
  getAllCustomer(): Promise<GetCustomerResponse> {
    const url = '/customers/all';
    return instanceAxios.get(url);
  },
  getCustomerFeedback(params: ParamGetCustomer): Promise<GetCustomerResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/customer-pages?${newParams}`;
    return instanceAxios.get(url);
  },
  getCustomerByWhatWeDo(params: ParamGetCustomer): Promise<GetCustomerResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/customers?${newParams}`;
    return instanceAxios.get(url);
  },
};

export default customer;
