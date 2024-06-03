import { createSlice } from '@reduxjs/toolkit';
import { LinkTreeState, ItemContact } from './link-tree.type';
import { getLinkTreeBySlugAction } from './link-tree.action';

const initialState: LinkTreeState = {
  getDetailContact: {
    data: {} as ItemContact,
    load: false,
    error: '',
  },
};

const linkTreeSlice = createSlice({
  name: 'linkTree',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // get customer by what we do id
    builder.addCase(getLinkTreeBySlugAction.pending, (state: LinkTreeState) => ({
      ...state,
      getDetailContact: {
        ...state.getDetailContact,
        load: true,
      },
    }));
    builder.addCase(getLinkTreeBySlugAction.fulfilled, (state: LinkTreeState, action: any) => ({
      ...state,
      getDetailContact: {
        ...state.getDetailContact,
        load: false,
        data: action.payload.data,
      },
    }));
    builder.addCase(getLinkTreeBySlugAction.rejected, (state: LinkTreeState) => ({
      ...state,
      getDetailContact: {
        ...state.getDetailContact,
        data: {} as ItemContact,
      },
    }));
  },
});

export default linkTreeSlice.reducer;
