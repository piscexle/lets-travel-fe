import { createSlice } from '@reduxjs/toolkit';
import { BusinessState, ItemBusiness } from './business.type';
import { getInfoBusiness } from './business.action';

const initialState: BusinessState = {
  loading: false,
  infoBusiness: {} as ItemBusiness,
  error: '',
};

const businessSlice = createSlice({
  name: 'business',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfoBusiness.pending, (state: BusinessState) => ({
      ...state,
      infoBusiness: state.infoBusiness,
      loading: true,
    }));
    builder.addCase(getInfoBusiness.fulfilled, (state: BusinessState, action: any) => ({
      ...state,
      infoBusiness: {
        ...(action.payload.data || {}),
      },
      loading: false,
    }));
    builder.addCase(getInfoBusiness.rejected, (state: BusinessState) => ({
      ...state,
      loading: false,
      infoBusiness: {} as ItemBusiness,
      error: '',
    }));
  },
});

export default businessSlice.reducer;
