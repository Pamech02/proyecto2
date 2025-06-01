import { configureStore } from '@reduxjs/toolkit';
import goalReducer from './slices/goals';

export const store = configureStore({
  reducer: {
    goal: goalReducer,
  },
});
