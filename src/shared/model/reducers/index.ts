import { combineReducers } from '@reduxjs/toolkit';
import { pageMainReducer } from './pageMain';
import { pageFormReducer } from './pageForm';

export const rootReducer = combineReducers({
  api: pageMainReducer.reducer,
  formState: pageFormReducer,
});
