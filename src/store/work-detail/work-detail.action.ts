import workDetail from '@/store/work-detail/work-detail.api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParamGetWorkDetail } from './work-detail.type';

const getWorkDetail = createAsyncThunk(
  'workDetail/getWorkDetail',
  async (params: ParamGetWorkDetail, thunkAPI) => {
    try {
      const res = await workDetail.getWorkDetail(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export { getWorkDetail };
