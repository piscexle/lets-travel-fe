import { instanceAxios } from '@/config/axios';
import { GetWorkDetailResponse, ParamGetWorkDetail } from './work-detail.type';

const workDetail = {
  getWorkDetail(params: ParamGetWorkDetail): Promise<GetWorkDetailResponse> {
    const { id } = params;
    const url = `/our-works/${id}`;
    return instanceAxios.get(url);
  },
};

export default workDetail;
