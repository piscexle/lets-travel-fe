import { createAsyncThunk } from '@reduxjs/toolkit';
import business from './business.api';

const getInfoBusiness = createAsyncThunk('business/getInfoBusiness', async (_, thunkAPI) => {
  try {
    const res = await business.getInfoBusiness();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.message });
  }
});

export { getInfoBusiness };
