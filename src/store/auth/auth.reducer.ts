import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState, TokenPayloadAction, UserPayloadAction } from './auth.type';
import { loginAction } from './auth.action';

const initialState: AuthState = {
  user: {
    id: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    role: '',
    email: '',
    firstName: null,
    lastName: null,
    avatar: '',
    phoneNumber: '',
  },
  token: {
    expiresIn: 0,
    accessToken: '',
    refreshToken: '',
  },
  error: '',
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuth: (state: AuthState, action: PayloadAction<UserPayloadAction>) => ({
      ...state,
      user: action.payload,
    }),
    setTokenAuth: (state: AuthState, action: PayloadAction<TokenPayloadAction>) => ({
      ...state,
      token: action.payload,
    }),
    setErrorAuth: (state: AuthState, action: any) => ({
      ...state,
      error: action.payload,
    }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state: AuthState) => ({
        ...state,
        token: {
          expiresIn: 0,
          accessToken: '',
          refreshToken: '',
        },
        user: {
          id: '',
          createdAt: '',
          updatedAt: '',
          deletedAt: null,
          role: '',
          email: '',
          firstName: null,
          lastName: null,
          avatar: '',
          phoneNumber: '',
        },
        error: '',
        loading: true,
      }))
      .addCase(loginAction.fulfilled, (state: AuthState, action: any) => {
        const { data } = action.payload;
        // khi đăng nhập thành công thì lưu vào local ở dạng string
        localStorage.setItem(
          'persist:auth-lets_travel',
          JSON.stringify({
            token: data.token,
            user: data.user,
          })
        );

        // return tự động đồng bộ persist auth ở dạng json object
        return {
          ...state,
          token: data.token,
          user: data.user,
          error: '',
          loading: false,
        };
      })
      .addCase(loginAction.rejected, (state: AuthState, action: any) => ({
        ...state,
        token: {
          expiresIn: 0,
          accessToken: '',
          refreshToken: '',
        },
        user: {
          id: '',
          createdAt: '',
          updatedAt: '',
          deletedAt: null,
          role: '',
          email: '',
          firstName: null,
          lastName: null,
          avatar: '',
          phoneNumber: '',
        },
        error: action.payload?.error,
        loading: false,
      }));
  },
});

export const { setTokenAuth, setUserAuth, setErrorAuth } = authSlice.actions;

export default authSlice.reducer;
