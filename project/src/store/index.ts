import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import { createAPI } from '../services/api';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export const api = createAPI();

export default store;
