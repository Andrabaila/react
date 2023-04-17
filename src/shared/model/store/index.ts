import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import { setupListeners } from '@reduxjs/toolkit/query';
import { AppDispatch, RootState } from './types';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { pageMainReducer } from '../reducers/pageMain';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(pageMainReducer.middleware),
});
setupListeners(store.dispatch);

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
