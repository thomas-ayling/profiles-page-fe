import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface FileErrorType {
  error?: boolean;
  errorStatus: object | null;
}

interface FileSuccessType {
  success?: boolean;
  response: object | null;
}

interface FileStatusType extends FileErrorType, FileSuccessType {}

const initialState: FileStatusType = {
  error: false,
  errorStatus: null,
  success: false,
  response: null,
};

export const fileStatusSlice = createSlice({
  name: 'fileStatus',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<FileErrorType>) => {
      state.error = true;
      state.errorStatus = action.payload.errorStatus ?? { message: 'An unknow error has occurred' };
      state.success = false;
      state.response = null;
    },

    setSuccess: (state, action: PayloadAction<FileSuccessType>) => {
      state.error = false;
      state.errorStatus = null;
      state.success = true;
      state.response = action.payload.response ?? null;
    },
  },
});

export const { setError, setSuccess } = fileStatusSlice.actions;

export const selectIsError = (state: RootState) => state.fileStatus.error;
export const selectErrorStatus = (state: RootState) => state.fileStatus.errorStatus;
export const selectIsSuccess = (state: RootState) => state.fileStatus.success;
export const selectResponse = (state: RootState) => state.fileStatus.response;

export default fileStatusSlice.reducer;
