import { createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { getAllCustomer, getCustomerByWhatWeDo, getCustomerFeedback } from './customer.action';
import { CustomerState, ItemCustomer, ItemCustomerFeedback } from './customer.type';

const initialState: CustomerState = {
  data: [] as ItemCustomer[],
  dataCustomerByWhatWeDo: {
    data: [],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },
  listCustomerFeedback: {
    data: [] as ItemCustomerFeedback[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },
  meta: {} as MetaPagination,
  load: false,
  error: '',
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllCustomer.pending, (state: CustomerState) => ({
      ...state,
      data: state.data,
      load: true,
    }));
    builder.addCase(getAllCustomer.fulfilled, (state: CustomerState, action: any) => ({
      ...state,
      data: action.payload.data?.filter((el: ItemCustomer) => el?.isActive),
      load: false,
      error: '',
    }));
    builder.addCase(getAllCustomer.rejected, (state: CustomerState) => ({
      ...state,
      data: [],
      meta: {},
      load: false,
      error: '',
    }));
    // customer feedback
    builder.addCase(getCustomerFeedback.pending, (state: CustomerState) => ({
      ...state,
      listCustomerFeedback: {
        ...state.listCustomerFeedback,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getCustomerFeedback.fulfilled, (state: CustomerState, action: any) => ({
      ...state,
      listCustomerFeedback: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getCustomerFeedback.rejected, (state: CustomerState) => ({
      ...state,
      listCustomerFeedback: {
        data: [] as ItemCustomerFeedback[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));
    // get customer by what we do id
    builder.addCase(getCustomerByWhatWeDo.pending, (state: CustomerState) => ({
      ...state,
      dataCustomerByWhatWeDo: {
        ...state.dataCustomerByWhatWeDo,
        load: true,
      },
    }));
    builder.addCase(getCustomerByWhatWeDo.fulfilled, (state: CustomerState, action: any) => ({
      ...state,
      dataCustomerByWhatWeDo: {
        ...state.dataCustomerByWhatWeDo,
        load: false,
        data: action.payload.data,
        meta: action.payload.meta,
      },
    }));
    builder.addCase(getCustomerByWhatWeDo.rejected, (state: CustomerState) => ({
      ...state,
      dataCustomerByWhatWeDo: {
        ...state.dataCustomerByWhatWeDo,
        data: [],
      },
    }));
  },
});

export default customerSlice.reducer;
