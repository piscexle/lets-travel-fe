import customer from '@/store/customer/customer.api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParamGetCustomer } from './customer.type';

const getAllCustomer = createAsyncThunk('customer/getAllCustomer', async (_, thunkAPI) => {
  try {
    const res = await customer.getAllCustomer();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const getCustomerFeedback = createAsyncThunk(
  'customer/getCustomerFeedback',
  async (params: ParamGetCustomer, thunkAPI) => {
    try {
      const res = await customer.getCustomerFeedback(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const getCustomerByWhatWeDo = createAsyncThunk(
  'customer/getCustomerByWhatWeDo',
  async (params: ParamGetCustomer, thunkAPI) => {
    try {
      const results = await customer.getCustomerByWhatWeDo(params);
      return results;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export { getAllCustomer, getCustomerFeedback, getCustomerByWhatWeDo };
