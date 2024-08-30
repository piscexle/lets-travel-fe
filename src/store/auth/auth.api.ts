import { instanceAxios } from '@/config/axios';
import { ParamLoginAdmin, LoginAdminResponse } from './auth.type';

const auth = {
  login(body: ParamLoginAdmin): Promise<LoginAdminResponse> {
    const url = 'auth/login';
    return instanceAxios.post(url, body);
  },

  doSendMailForgotPassword(email: string): Promise<{ messageCode: string }> {
    const url = `/auth/forgot-password/otp/${encodeURIComponent(email)}`;
    return instanceAxios.get(url);
  },
};

export default auth;
