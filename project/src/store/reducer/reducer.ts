import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, cityTabsActive, requireAuthorization, setError } from '../action';
import { AuthorizationStatus } from '../../const';
import { Offers } from '../../types/offer';

type InitialState = {
  activeLocation: string,
  authorizationStatus: AuthorizationStatus,
  offers: Offers,
  isDataLoaded: boolean,
  error: string,
}

const initialState: InitialState = {
  activeLocation: 'Paris',
  authorizationStatus: AuthorizationStatus.Unknown,
  offers: [],
  isDataLoaded: false,
  error: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityTabsActive, (state, action) => {
      state.activeLocation = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export default reducer;
