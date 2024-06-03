import { instanceAxios } from '@/config/axios';
import { ValueTypeContactWork, ContactWorkResponse } from './contact-work.type';

const auth = {
  contactWork(body: ValueTypeContactWork): Promise<ContactWorkResponse> {
    const url = '/contacts';
    return instanceAxios.post(url, body);
  },
};

export default auth;
