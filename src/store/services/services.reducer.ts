import { createSlice } from '@reduxjs/toolkit';
import { Servicestate, ItemService } from './services.type';
import { getDataServices, getDetailServices } from './services.action';

const initialState: Servicestate = {
  loading: false,
  services: [] as ItemService[],
  detail: {} as ItemService,
  error: '',
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    resetServicesDetail: (state) => ({
      ...state,
      detail: {} as ItemService,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getDataServices.pending, (state: Servicestate) => ({
      ...state,
      services: state.services,
      loading: true,
    }));
    builder.addCase(getDataServices.fulfilled, (state: Servicestate, action: any) => ({
      ...state,
      services: action.payload?.data,
      loading: false,
    }));
    builder.addCase(getDataServices.rejected, (state: Servicestate) => ({
      ...state,
      loading: false,
      error: '',
    }));
    // service detail
    builder.addCase(getDetailServices.pending, (state: Servicestate) => ({
      ...state,
      detail: state.detail,
      loading: true,
    }));
    builder.addCase(getDetailServices.fulfilled, (state: Servicestate, action: any) => ({
      ...state,
      detail: action.payload?.data,
      loading: false,
    }));
    builder.addCase(getDetailServices.rejected, (state: Servicestate) => ({
      ...state,
      loading: false,
      detail: {} as ItemService,
      error: '',
    }));
  },
});

export const { resetServicesDetail } = serviceSlice.actions;

export default serviceSlice.reducer;
