import { createAction } from '@reduxjs/toolkit';
import { Offers } from '../types/offer';

export const loadOffers = createAction<Offers>('data/loadOffers');
