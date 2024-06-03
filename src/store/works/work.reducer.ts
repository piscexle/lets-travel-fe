import { createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { getListWork } from './work.action';
import { WorkState, ItemWork } from './work.type';

const initialState: WorkState = {
  data: [] as ItemWork[],
  meta: {} as MetaPagination,
  load: false,
  error: '',
};

const worksSlice = createSlice({
  name: 'works',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getListWork.pending, (state: WorkState) => ({
      ...state,
      data: state.data,
      load: true,
    }));
    builder.addCase(getListWork.fulfilled, (state: WorkState, action: any) => ({
      ...state,
      data: action.payload.data,
      meta: action.payload.meta,
      load: false,
      error: '',
    }));
    builder.addCase(getListWork.rejected, (state: WorkState) => ({
      ...state,
      data: [],
      meta: {},
      load: false,
      error: '',
    }));
  },
});

export default worksSlice.reducer;
