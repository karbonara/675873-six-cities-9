import { APIRoute } from '../const';
import { api } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import store from '../store';
import { Offer } from '../types/offer';
import { loadOffers } from './action';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    const { data } = await api.get<Offer>(APIRoute.Offers);
    store.dispatch(loadOffers(data));
  },
);
