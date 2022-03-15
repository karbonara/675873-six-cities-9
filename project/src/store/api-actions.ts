import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../store';
import { store } from '../store';
import { Questions } from '../types/question';
import { loadQuestions, requireAuthorization } from './action';
import { APIRoute } from '../const';

export const fetchQuestionAction = createAsyncThunk(
  'data/fetchQuestions',
  async () => {
    const { data } = await api.get<Questions>(APIRoute.Questions);
    store.dispatch(loadQuestions(data));
  },
);
