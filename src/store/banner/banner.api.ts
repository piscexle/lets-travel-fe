import { instanceAxios } from '@/config/axios';
import { GetBannerResponse, ParamGetBanners } from './banner.type';

const banner = {
  getInfoBanner(params: ParamGetBanners): Promise<GetBannerResponse> {
    const url = `/banners/${params.menuKey}`;
    return instanceAxios.get(url);
  },
};

export default banner;
