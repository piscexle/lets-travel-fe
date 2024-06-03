import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import uploadSlice from './upload/upload.reducer';
import customerSlice from './customer/customer.reducer';
import authSlice from './auth/auth.reducer';
import whatWeDosSlice from './what-we-do/what-we-do.reducer';
import ourTeamSlice from './our-team/our-team.reducer';
import technicalSkillSlice from './technical-skill/technical-skill.reducer';
import contactWorkSlice from './contact-work/contact-work.reducer';
import worksSlice from './works/work.reducer';
import workDetailSlice from './work-detail/work-detail.reducer';
import careerSlice from './career/career.reducer';
import bannerSlice from './banner/banner.reducer';
import serviceSlice from './services/services.reducer';
import notificationSlice from './notification/notification.reducer';
import aboutUsSlice from './about-us/about-us.reducer';
import businessSlice from './business/business.reducer';
import newsSlice from './news/news.reducer';
import linkTreeSlice from './link-tree/link-tree.reducer';

import { AuthState } from './auth/auth.type';

const createNoopStorage = () => ({
  // eslint-disable-next-line no-unused-vars
  getItem(_key: any) {
    return Promise.resolve(null);
  },
  // eslint-disable-next-line no-unused-vars
  setItem(_key: any, value: any) {
    return Promise.resolve(value);
  },
  // eslint-disable-next-line no-unused-vars
  removeItem(_key: any) {
    return Promise.resolve();
  },
});

const storage = typeof window !== 'undefined' ? createWebStorage('local') : createNoopStorage();
const authPersistConfig = {
  key: 'auth-lets_travel',
  storage,
  whitelist: ['token', 'user'],
};

export const store = configureStore({
  reducer: {
    authSlice: persistReducer<AuthState>(authPersistConfig, authSlice),
    whatWeDosSlice,
    customerSlice,
    uploadSlice,
    ourTeamSlice,
    technicalSkillSlice,
    contactWorkSlice,
    worksSlice,
    workDetailSlice,
    careerSlice,
    bannerSlice,
    serviceSlice,
    notificationSlice,
    aboutUsSlice,
    businessSlice,
    newsSlice,
    linkTreeSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
