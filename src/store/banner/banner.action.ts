import { createAsyncThunk } from '@reduxjs/toolkit';
import banner from './banner.api';
import { ParamGetBanners } from './banner.type';

const getInfoBanner = createAsyncThunk(
  'banner/getInfoBanner',
  async (params: ParamGetBanners, thunkAPI) => {
    try {
      const res = await banner.getInfoBanner(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  }
);

export { getInfoBanner };
