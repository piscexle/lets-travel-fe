import { createSlice } from '@reduxjs/toolkit';
import {
  getDetailNewsAction,
  getDetailTypeNewsAction,
  getListNewsAction,
  getListTypeNewsAction,
} from './news.action';
import { NewsState, ItemNews } from './news.type';

const initialState: NewsState = {
  listNews: {
    data: [],
    meta: {},
    load: false,
    error: '',
  },
  listTypeNews: {
    data: [],
    meta: {},
    load: false,
    error: '',
  },
  detailNews: {
    data: {} as ItemNews,
    load: false,
    error: '',
  },
  detailTypeNews: {
    data: {} as ItemNews,
    load: false,
    error: '',
  },
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // get list news
    builder.addCase(getListNewsAction.pending, (state: NewsState) => ({
      ...state,
      listNews: {
        ...state.listNews,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getListNewsAction.fulfilled, (state: NewsState, action: any) => ({
      ...state,
      listNews: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getListNewsAction.rejected, (state: NewsState) => ({
      ...state,
      listNews: {
        ...state.listNews,
        data: [],
        load: false,
        error: '',
      },
    }));
    // get list type news
    builder.addCase(getListTypeNewsAction.pending, (state: NewsState) => ({
      ...state,
      listTypeNews: {
        ...state.listTypeNews,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getListTypeNewsAction.fulfilled, (state: NewsState, action: any) => ({
      ...state,
      listTypeNews: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getListTypeNewsAction.rejected, (state: NewsState) => ({
      ...state,
      listTypeNews: {
        ...state.listTypeNews,
        data: [],
        load: false,
        error: '',
      },
    }));
    // get detail news
    builder.addCase(getDetailNewsAction.pending, (state: NewsState) => ({
      ...state,
      detailNews: {
        ...state.detailNews,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getDetailNewsAction.fulfilled, (state: NewsState, action: any) => ({
      ...state,
      detailNews: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDetailNewsAction.rejected, (state: NewsState) => ({
      ...state,
      detailNews: {
        ...state.detailNews,
        data: {} as ItemNews,
        load: false,
        error: '',
      },
    }));
    // get detail type news
    builder.addCase(getDetailTypeNewsAction.pending, (state: NewsState) => ({
      ...state,
      detailTypeNews: {
        ...state.detailTypeNews,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getDetailTypeNewsAction.fulfilled, (state: NewsState, action: any) => ({
      ...state,
      detailTypeNews: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDetailTypeNewsAction.rejected, (state: NewsState) => ({
      ...state,
      detailTypeNews: {
        ...state.detailTypeNews,
        data: {} as ItemNews,
        load: false,
        error: '',
      },
    }));
  },
});

export default newsSlice.reducer;
