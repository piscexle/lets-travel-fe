import { createSlice } from '@reduxjs/toolkit';
import { AboutUsState, ItemAboutUs } from './about-us.type';
import { getInfoAboutUs } from './about-us.action';

const initialState: AboutUsState = {
  loading: false,
  infoAboutUs: {} as ItemAboutUs,
  error: '',
};

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfoAboutUs.pending, (state: AboutUsState) => ({
      ...state,
      infoAboutUs: state.infoAboutUs,
      loading: true,
    }));
    builder.addCase(getInfoAboutUs.fulfilled, (state: AboutUsState, action: any) => ({
      ...state,
      infoAboutUs: action.payload.data,
      loading: false,
    }));
    builder.addCase(getInfoAboutUs.rejected, (state: AboutUsState) => ({
      ...state,
      loading: false,
      infoAboutUs: {} as ItemAboutUs,
      error: '',
    }));
  },
});

export default aboutUsSlice.reducer;
