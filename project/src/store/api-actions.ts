import { APIRoute, AuthorizationStatus } from '../const';
import { api } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../store';
import { Offers } from '../types/offer';
import { loadOffers, requireAuthorization } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { errorHandle } from '../utils';

export const fetchOffersAction = createAsyncThunk(
  'data/loadOffers',
  async () => {
    try {
      const { data } = await api.get<Offers>(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (err) {
      errorHandle(err);
    }
  },
);

export const checkAuthAction = createAsyncThunk(
  'user/checkAuth',
  async () => {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const loginAction = createAsyncThunk(
  'user/login',
  async ({ login: email, password }: AuthData) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk(
  'user/logout',
  async () => {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
