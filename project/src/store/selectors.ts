import { State } from '../types/state';

export const getOffers = (state: State) => state.offers;
export const getCurrentCityName = (state: State) => state.activeLocation;
