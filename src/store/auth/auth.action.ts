import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParamLoginAdmin } from './auth.type';
import auth from './auth.api';

const loginAction = createAsyncThunk(
  'auth/loginAction',
  async (body: ParamLoginAdmin, thunkAPI) => {
    try {
      const res = await auth.login(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  }
);

export { loginAction };
