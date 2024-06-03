import { instanceAxios } from '@/config/axios';
import { ParamLoginAdmin, LoginAdminResponse } from './auth.type';

const auth = {
  login(body: ParamLoginAdmin): Promise<LoginAdminResponse> {
    const url = 'auth/login';
    return instanceAxios.post(url, body);
  },
};

export default auth;
