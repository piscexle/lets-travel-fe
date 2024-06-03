import { instanceAxios } from '@/config/axios';
import omit from 'lodash/omit';
import { ParameterPost, ParameterPut } from './link-tree.type';

const linkTree = {
  postLinkTree(params: ParameterPost): Promise<any> {
    const url = '/visit-cards';
    return instanceAxios.post(url, params);
  },

  getLinkTreeBySlug(params: string): Promise<any> {
    const url = `/visit-cards/${params}`;
    return instanceAxios.get(url);
  },

  putLinkTreeBySlug(params: ParameterPut): Promise<any> {
    const url = `/visit-cards/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },
};

export default linkTree;
