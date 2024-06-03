import linkTree from '@/store/link-tree/link-tree.api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParameterPost } from './link-tree.type';

const postLinkTreeAction = createAsyncThunk(
  'linkTree/postLinkTreeAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await linkTree.postLinkTree(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getLinkTreeBySlugAction = createAsyncThunk(
  'linkTree/getLinkTreeBySlugAction',
  async (params: string, thunkAPI) => {
    try {
      const res = await linkTree.getLinkTreeBySlug(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);
export { postLinkTreeAction, getLinkTreeBySlugAction };
