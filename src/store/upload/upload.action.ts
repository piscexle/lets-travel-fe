import upload from '@/store/upload/upload.api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ParamDeleteUploadImage,
  ParamPostUploadImage,
  ParamPostUploadImages,
  ParamPostUploadSingleFile,
  ParamPostUploadVideo,
} from './upload.type';

const postUploadImageAction = createAsyncThunk(
  'upload/postUploadImageAction',
  async (params: ParamPostUploadImage, thunkAPI) => {
    try {
      const res = await upload.postUploadImage(params).then((response) => {
        if (response) {
          return response;
        }
        return {};
      });
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const deleteUploadImageAction = createAsyncThunk(
  'upload/deleteUploadImageAction',
  async (params: ParamDeleteUploadImage, thunkAPI) => {
    try {
      const res = await upload.deleteUploadImage(params).then((response) => response);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const postUploadImagesAction = createAsyncThunk(
  'upload/postUploadImagesAction',
  async (params: ParamPostUploadImages, thunkAPI) => {
    try {
      const res = await upload.postUploadImages(params).then((response) => {
        if (response) {
          return response;
        }
        return {};
      });
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const postUploadVideoAction = createAsyncThunk(
  'upload/postUploadVideoAction',
  async (params: ParamPostUploadVideo, thunkAPI) => {
    try {
      const res = await upload.postUploadVideo(params).then((response) => {
        if (response) {
          return response;
        }
        return {};
      });
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const postUploadSingleFileAction = createAsyncThunk(
  'upload/postUploadSingleFileAction',
  async (params: ParamPostUploadSingleFile, thunkAPI) => {
    try {
      const res = await upload.postUploadSingleFile(params).then((response) => {
        if (response) {
          return response;
        }
        return {};
      });
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export {
  postUploadImageAction,
  deleteUploadImageAction,
  postUploadVideoAction,
  postUploadImagesAction,
  postUploadSingleFileAction,
};
