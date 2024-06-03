import { instanceAxios } from '@/config/axios';
import { GetTechnicalSkillResponse } from './technical-skill.type';

const technicalSkill = {
  getTechnicalSkill(): Promise<GetTechnicalSkillResponse> {
    const url = '/technical-skills';
    return instanceAxios.get(url);
  },
};

export default technicalSkill;
