import { APIRoute, AuthorizationStatus } from '../const';
import { api } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../store';
import { Offers } from '../types/offer';
import { loadOffers, requireAuthorization } from './action';

function errorHandle(err: unknown) {
  throw new Error('Function not implemented.');
}

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
    try {
      await api.get(APIRoute.Login);
      store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch (error) {
      errorHandle(error);
      store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);
