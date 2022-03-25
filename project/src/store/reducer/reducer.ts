import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, cityTabsActive, requireAuthorization, setError, loadComments, loadOffer } from '../action';
import { AuthorizationStatus } from '../../const';
import { Offers } from '../../types/offer';
import { Comments } from '../../types/comment';

type InitialState = {
  activeLocation: string,
  authorizationStatus: AuthorizationStatus,
  offers: Offers,
  offer: Offers,
  isDataLoaded: boolean,
  error: string,
  comments: Comments,
}

const initialState: InitialState = {
  activeLocation: 'Paris',
  authorizationStatus: AuthorizationStatus.Unknown,
  offers: [],
  offer: [],
  isDataLoaded: false,
  error: '',
  comments: [],
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
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export default reducer;
