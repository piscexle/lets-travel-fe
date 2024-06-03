import { instanceAxios } from '@/config/axios';
import { GetAboutUsResponse } from './about-us.type';

const aboutUs = {
  getInfoAboutUs(): Promise<GetAboutUsResponse> {
    const url = `/about-us`;
    return instanceAxios.get(url);
  },
};

export default aboutUs;
