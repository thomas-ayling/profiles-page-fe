import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface FileErrorStatusType {
  status: number;
  message: string;
}

interface FileSuccessResponseType {
  fileName: string;
  fileLocation: string;
}

interface FileErrorType {
  error?: boolean;
  errorStatus: FileErrorStatusType | null;
}

interface FileSuccessType {
  success?: boolean;
  response: FileSuccessResponseType | null;
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
      state.errorStatus = {status: action.payload.errorStatus?.status ?? 400, message: action.payload.errorStatus?.message ?? 'An unknow error has occurred'} ;
      state.success = false;
      state.response = null;
    },
    setSuccess: (state, action: PayloadAction<FileSuccessType>) => {
      state.error = false;
      state.errorStatus = null;
      state.success = true;
      state.response = action.payload.response ?? null;
    },
    resetFileStatus: (state) => {
      state = initialState;
    },
  },
});

export const { setError, setSuccess, resetFileStatus } = fileStatusSlice.actions;

export const selectIsError = (state: RootState) => state.fileStatus.error;
export const selectErrorStatus = (state: RootState) => state.fileStatus.errorStatus;
export const selectIsSuccess = (state: RootState) => state.fileStatus.success;
export const selectResponse = (state: RootState) => state.fileStatus.response;
export const selectFileStatus = (state: RootState) => state.fileStatus;

export default fileStatusSlice.reducer;
