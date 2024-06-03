import { createSlice } from '@reduxjs/toolkit';
import { ContactWorkState } from './contact-work.type';
import { contactWorkAction } from './contact-work.action';

const initialState: ContactWorkState = {
  loading: false,
  error: '',
};

const contactWorkSlice = createSlice({
  name: 'contactWork',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactWorkAction.pending, (state: ContactWorkState) => ({
        ...state,
        loading: true,
      }))
      .addCase(contactWorkAction.fulfilled, (state: ContactWorkState) => ({
        ...state,
        loading: false,
      }))
      .addCase(contactWorkAction.rejected, (state: ContactWorkState, action: any) => ({
        error: action.payload?.error,
        loading: false,
      }));
  },
});

// export const { setTokenAuth, setUserAuth, setErrorAuth } = contactWorkSlice.actions;

export default contactWorkSlice.reducer;
