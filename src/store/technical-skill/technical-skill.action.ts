import technical from '@/store/technical-skill/technical-skill.api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getTechnicalSkill = createAsyncThunk('customer/getTechnicalSkill', async (_, thunkAPI) => {
  try {
    const res = await technical.getTechnicalSkill();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export { getTechnicalSkill };
