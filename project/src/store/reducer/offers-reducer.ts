import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { offers } from '../../mocks/offers';

const offersReducer = createSlice({
  name: 'offers',
  initialState: offers,
  reducers: {
    setOffers: (state, action: PayloadAction<[Offer]>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setOffers } = offersReducer.actions;

export default offersReducer;
