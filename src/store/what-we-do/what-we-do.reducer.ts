import { createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { getAllWhatWeDo, getListWhatWeDo } from './what-we-do.action';
import { WhatWeDoState, ItemWhatWeDo } from './what-we-do.type';

const initialState: WhatWeDoState = {
  data: [] as ItemWhatWeDo[],
  images: [],
  meta: {} as MetaPagination,
  load: false,
  error: '',
  dataWhatWeDo: {
    data: [],
    load: false,
    meta: {},
    error: '',
  },
};

const whatWeDoSlice = createSlice({
  name: 'whatWeDo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllWhatWeDo.pending, (state: WhatWeDoState) => ({
      ...state,
      data: state.data,
    }));
    builder.addCase(getAllWhatWeDo.fulfilled, (state: WhatWeDoState, action: any) => ({
      ...state,
      data: action.payload.data,
      images: action.payload.data.map((el: { image: string }) => el.image),
    }));
    builder.addCase(getAllWhatWeDo.rejected, (state: WhatWeDoState) => ({
      ...state,
      data: [],
    }));
    // get list what we do
    builder.addCase(getListWhatWeDo.pending, (state: WhatWeDoState) => ({
      ...state,
      dataWhatWeDo: {
        ...state.dataWhatWeDo,
      },
    }));
    builder.addCase(getListWhatWeDo.fulfilled, (state: WhatWeDoState, action: any) => ({
      ...state,
      dataWhatWeDo: {
        ...state.dataWhatWeDo,
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
      },
    }));
    builder.addCase(getListWhatWeDo.rejected, (state: WhatWeDoState) => ({
      ...state,
      dataWhatWeDo: state.dataWhatWeDo,
    }));
  },
});

export default whatWeDoSlice.reducer;
