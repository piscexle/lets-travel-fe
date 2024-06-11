import { AxiosResponse } from 'axios';

export type ParamLoginAdmin = {
  email: string;
  password: string;
};

export type TokenPayloadAction = { expiresIn: number; accessToken: string; refreshToken: string };

export type LoginAdminResponse = AxiosResponse<{
  data: {
    token: {
      expiresIn: number;
      accessToken: string;
      refreshToken: string;
    };
    user: {
      id: string;
      createdAt: string;
      updatedAt: string;
      deletedAt: string | null;
      role: string;
      email: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string;
    };
  };
  error?: string;
}>;

export interface AuthState {
  user: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    role: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    avatar: string;
  };
  token: {
    expiresIn: number;
    accessToken: string;
    refreshToken: string;
  };
  error: string;
  loading: boolean;
  typeLogin: string;
}

export interface ResetPasswordModel {
  email: string;
  newPassword: string;
  oldPassword: string;
}

export interface UpdateProfile {
  firstName?: string | null;
  lastName?: string | null;
  avatar?: string;
  phoneNumber?: string | null;
}

export type UserPayloadAction = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  role: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string;
  phoneNumber: string | null;
};
