import { createSlice } from '@reduxjs/toolkit';
import { getWorkDetail } from './work-detail.action';
import { WorkDetailState, ItemWorkDetail } from './work-detail.type';

const initialState: WorkDetailState = {
  data: {} as ItemWorkDetail,
  load: false,
  error: '',
};

const workDetailSlice = createSlice({
  name: 'workDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorkDetail.pending, (state: WorkDetailState) => ({
      ...state,
      data: state.data,
      load: true,
    }));
    builder.addCase(getWorkDetail.fulfilled, (state: WorkDetailState, action: any) => ({
      ...state,
      data: action.payload.data,
      load: false,
      error: '',
    }));
    builder.addCase(getWorkDetail.rejected, (state: WorkDetailState) => ({
      ...state,
      data: {} as ItemWorkDetail,
      load: false,
      error: '',
    }));
  },
});

export default workDetailSlice.reducer;
