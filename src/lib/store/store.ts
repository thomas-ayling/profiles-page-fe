import { configureStore} from '@reduxjs/toolkit';
import fileStatusReducer from './reducers/FileStatusSlice';

export const store = configureStore({
  reducer: {
    fileStatus: fileStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

