import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';

export const loadOffers = createAction<Offers>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const cityTabsActive = createAction<string>('data/cityTabs');

export const setError = createAction<string>('data/setError');

export const redirectToRoute = createAction<AppRoute>('game/redirectToRoute');
