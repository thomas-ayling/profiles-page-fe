import { configureStore} from '@reduxjs/toolkit';
import fileStatusReducer from './reducers/fileStatusSlice';

export const store = configureStore({
  reducer: {
    fileStatus: fileStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

