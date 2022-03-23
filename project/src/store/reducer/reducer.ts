import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, cityTabsActive, requireAuthorization } from '../action';
import { AuthorizationStatus } from '../../const';
import { Offers } from '../../types/offer';

type InitialState = {
  activeLocation: string,
  authorizationStatus: AuthorizationStatus,
  offers: Offers,
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  activeLocation: 'Paris',
  authorizationStatus: AuthorizationStatus.Unknown,
  offers: [],
  isDataLoaded: false,
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
    });
});

export default reducer;
