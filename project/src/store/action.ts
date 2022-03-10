import { createAction } from '@reduxjs/toolkit';

export const citysStep = createAction('tabs/cityChangeStep');
export const offerList = createAction('offer/offerList');

export const setCitysStep = (catIndex: never) => ({
  type: 'SET_CITY',
  payload: catIndex,
});
