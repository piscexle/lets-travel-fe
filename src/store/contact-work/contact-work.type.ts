import { AxiosResponse } from 'axios';

export type ValueTypeContactWork = {
  fullName: string;
  phoneNumber: string;
  email: string;
  address: string;
  message: string;
};

export type TokenPayloadAction = { expiresIn: number; accessToken: string; refreshToken: string };

export type ContactWorkResponse = AxiosResponse<{
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

export interface ContactWorkState {
  loading: boolean;
  error: string;
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
