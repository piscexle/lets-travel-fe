'use client';

import React from 'react';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import { store } from './index';

persistStore(store);

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>
