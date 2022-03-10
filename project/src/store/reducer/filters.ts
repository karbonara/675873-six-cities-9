import { PayloadAction } from '@reduxjs/toolkit';

export const initialState = {
  items: [],
};

const filters = (state = initialState, action: PayloadAction<string>) => {
  if (action.type === 'SET_CITY') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default filters;

