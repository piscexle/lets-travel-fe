import { instanceAxios } from '@/config/axios';
import { GetOurTeamResponse } from './our-team.type';

const ourTeam = {
  getAllOurTeam(): Promise<GetOurTeamResponse> {
    const url = '/our-teams/all';
    return instanceAxios.get(url);
  },
};

export default ourTeam;
