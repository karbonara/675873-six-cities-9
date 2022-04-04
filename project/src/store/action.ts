import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Offers } from '../types/offer';
import { Comments } from '../types/comment';

export const loadOffers = createAction<Offers>('data/loadOffers');
export const loadOffer = createAction<Offers>('data/loadOffer');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const cityTabsActive = createAction<string>('data/cityTabs');
export const setError = createAction<string>('data/setError');
export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
export const loadComments = createAction<Comments>('data/redirectToRoute');
export const postCommentsAction = createAction<Comments[]>('user/postComment');
