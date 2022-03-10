import { createReducer } from '@reduxjs/toolkit';
import { citysStep } from '../action';

const STEP_COUNT = 1;

const initialState = {
  mistakes: 0,
  step: 1,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(citysStep, (state) => {
      state.step = state.step + STEP_COUNT;
    });
});

export { reducer };
