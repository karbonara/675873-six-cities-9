import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';
import { filters } from './reducer/filters';

export const store = configureStore({ filters });

export default store;
