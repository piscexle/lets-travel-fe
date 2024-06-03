import { createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { getListCareer, careerApply } from './career.action';
import { CareerState, ItemCareer } from './career.type';

const initialState: CareerState = {
  data: [] as ItemCareer[],
  meta: {} as MetaPagination,
  load: false,
  error: '',
};

const careerSlice = createSlice({
  name: 'career',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getListCareer.pending, (state: CareerState) => ({
      ...state,
      data: state.data,
      load: true,
    }));
    builder.addCase(getListCareer.fulfilled, (state: CareerState, action: any) => ({
      ...state,
      data: action.payload.data,
      meta: action.payload.meta,
      load: false,
      error: '',
    }));
    builder.addCase(getListCareer.rejected, (state: CareerState) => ({
      ...state,
      data: [],
      meta: {},
      load: false,
      error: '',
    }));

    // apply job
    builder.addCase(careerApply.pending, (state: CareerState) => ({
      ...state,
      load: true,
    }));
    builder.addCase(careerApply.fulfilled, (state: CareerState) => ({
      ...state,
      load: false,
      error: '',
    }));
    builder.addCase(careerApply.rejected, (state: CareerState) => ({
      ...state,
      load: false,
      error: '',
    }));
  },
});

export default careerSlice.reducer;
