import whatWeDo from '@/store/what-we-do/what-we-do.api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParamGetWhatWeDo } from './what-we-do.type';

const getAllWhatWeDo = createAsyncThunk('whatWeDo/getAll', async (_, thunkAPI) => {
  try {
    const res = await whatWeDo.getAllWhatWeDo();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});
const getListWhatWeDo = createAsyncThunk(
  'whatWeDo/getListWhatWeDo',
  async (params: ParamGetWhatWeDo, thunkAPI) => {
    try {
      const res = await whatWeDo.getListWhatWeDo(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export { getAllWhatWeDo, getListWhatWeDo };
