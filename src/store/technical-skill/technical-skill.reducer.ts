import { createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { getTechnicalSkill } from './technical-skill.action';
import { TechnicalSkillState, ItemTechnicalSkill } from './technical-skill.type';

const initialState: TechnicalSkillState = {
  data: [] as ItemTechnicalSkill[],
  meta: {} as MetaPagination,
  load: false,
  error: '',
};

const technicalSkillSlice = createSlice({
  name: 'technicalSkill',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTechnicalSkill.pending, (state: TechnicalSkillState) => ({
      ...state,
      data: state.data,
      load: true,
    }));
    builder.addCase(getTechnicalSkill.fulfilled, (state: TechnicalSkillState, action: any) => ({
      ...state,
      data: action.payload.data,
      load: false,
    }));
    builder.addCase(getTechnicalSkill.rejected, (state: TechnicalSkillState) => ({
      ...state,
      data: [],
      meta: {},
      load: false,
      error: '',
    }));
  },
});

export default technicalSkillSlice.reducer;
