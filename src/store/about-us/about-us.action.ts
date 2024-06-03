import { createAsyncThunk } from '@reduxjs/toolkit';
import aboutUs from './about-us.api';

const getInfoAboutUs = createAsyncThunk('aboutUs/getInfoAboutUs', async (params, thunkAPI) => {
  try {
    const res = await aboutUs.getInfoAboutUs();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.message });
  }
});

export { getInfoAboutUs };
