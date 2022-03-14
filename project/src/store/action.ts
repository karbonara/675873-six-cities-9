import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const citysStep = createAction('cityName');
export const offerList = createAction<Offer>('offersList');
