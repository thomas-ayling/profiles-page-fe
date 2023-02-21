import { configureStore, applyMiddleware, AnyAction, Dispatch } from '@reduxjs/toolkit';
import thunk, { ThunkDispatch } from 'redux-thunk';
import fileStatusReducer from './reducers/fileStatusSlice';

export const store = configureStore({
  reducer: {
    fileStatus: fileStatusReducer,
  },
  // middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = Dispatch<AnyAction> & ThunkDispatch<RootState, null, AnyAction>;
