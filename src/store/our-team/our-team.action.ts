import ourTeam from '@/store/our-team/our-team.api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const getAllOurTeam = createAsyncThunk('customer/getAllOurTeam', async (_, thunkAPI) => {
  try {
    const res = await ourTeam.getAllOurTeam();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export { getAllOurTeam };
