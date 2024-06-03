import career from '@/store/career/career.api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParamGetCareer, ValueApply } from './career.type';

const getListCareer = createAsyncThunk(
  'carrer/getListCareer',
  async (params: ParamGetCareer, thunkAPI) => {
    try {
      const res = await career.getListCareer(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const careerApply = createAsyncThunk('carrer/careerApply', async (params: ValueApply, thunkAPI) => {
  try {
    const res = await career.applyJob(params);
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export { getListCareer, careerApply };
