import { createAsyncThunk } from '@reduxjs/toolkit';
import { ValueTypeContactWork } from './contact-work.type';
import contact from './contact-work.api';

const contactWorkAction = createAsyncThunk(
  'contact/contactWorkAction',
  async (body: ValueTypeContactWork, thunkAPI) => {
    try {
      const res = await contact.contactWork(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.message });
    }
  }
);

export { contactWorkAction };
