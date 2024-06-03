import { createAsyncThunk } from '@reduxjs/toolkit';
import news from './news.api';
import { ParamGetNews } from './news.type';

const getListNewsAction = createAsyncThunk(
  'news/getListNews',
  async (params: ParamGetNews, thunkAPI) => {
    try {
      const res = await news.getListNews(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getListTypeNewsAction = createAsyncThunk(
  'news/getListTypeNews',
  async (params: ParamGetNews, thunkAPI) => {
    try {
      const res = await news.getListTypeNews(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getDetailNewsAction = createAsyncThunk('news/getDetailNews', async (id: string, thunkAPI) => {
  try {
    const res = await news.getDetailNews(id);
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const getDetailTypeNewsAction = createAsyncThunk(
  'news/getDetailTypeNews',
  async (id: string, thunkAPI) => {
    try {
      const res = await news.getDetailTypeNews(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export { getListNewsAction, getListTypeNewsAction, getDetailNewsAction, getDetailTypeNewsAction };
