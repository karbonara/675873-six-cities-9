import { APIRoute } from '../const';
import { api } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../store';
import { Offers } from '../types/offer';
import { loadOffers } from './action';

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
