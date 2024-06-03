import work from '@/store/works/work.api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParamGetWork } from './work.type';

const getListWork = createAsyncThunk('work/getListWork', async (params: ParamGetWork, thunkAPI) => {
  try {
    const res = await work.getListWork(params);
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export { getListWork };
