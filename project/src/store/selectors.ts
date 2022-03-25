import { State } from '../types/state';

export const getOffers = (state: State) => state.offers;
export const getOffer = (state: State) => state.offer;
export const getCurrentCityName = (state: State) => state.activeLocation;
export const getComments = (state: State) => state.comments;
