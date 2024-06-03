import { createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { getAllOurTeam } from './our-team.action';
import { OurTeamState, ItemOurTeam } from './our-team.type';

const initialState: OurTeamState = {
  data: [] as ItemOurTeam[],
  meta: {} as MetaPagination,
  load: false,
  error: '',
};

const ourTeamSlice = createSlice({
  name: 'ourTeam',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllOurTeam.pending, (state: OurTeamState) => ({
      ...state,
      data: state.data,
      load: true,
    }));
    builder.addCase(getAllOurTeam.fulfilled, (state: OurTeamState, action: any) => ({
      ...state,
      data: [action.payload.data],
      load: false,
    }));
    builder.addCase(getAllOurTeam.rejected, (state: OurTeamState) => ({
      ...state,
      meta: {},
      load: false,
      error: '',
    }));
  },
});

export default ourTeamSlice.reducer;
