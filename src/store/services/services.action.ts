import { createAsyncThunk } from '@reduxjs/toolkit';
import services from './services.api';
import { ParamGetServices, ParamGetServiceDetail } from './services.type';

const getDataServices = createAsyncThunk(
  'services/getDataServices',
  async (params: ParamGetServices, thunkAPI) => {
    try {
      const res = await services.getDataService(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  }
);

const getDetailServices = createAsyncThunk(
  'services/getDetailServices',
  async (params: ParamGetServiceDetail, thunkAPI) => {
    try {
      const res = await services.getDataServiceDetail(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  }
);

export { getDataServices, getDetailServices };
