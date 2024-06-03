import { createSlice } from '@reduxjs/toolkit';
import { BannerState, ItemBanner } from './banner.type';
import { getInfoBanner } from './banner.action';

const initialState: BannerState = {
  loading: false,
  infoBanner: {} as ItemBanner,
  error: '',
};

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInfoBanner.pending, (state: BannerState) => ({
      ...state,
      infoBanner: state.infoBanner,
      loading: true,
    }));
    builder.addCase(getInfoBanner.fulfilled, (state: BannerState, action: any) => ({
      ...state,
      infoBanner: {
        ...(action.payload.data || {}),
        images: action?.payload?.data?.images[0] || '',
      },
      loading: false,
    }));
    builder.addCase(getInfoBanner.rejected, (state: BannerState) => ({
      ...state,
      loading: false,
      infoBanner: {} as ItemBanner,
      error: '',
    }));
  },
});

export default bannerSlice.reducer;
