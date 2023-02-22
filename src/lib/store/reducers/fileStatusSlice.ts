import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MetadataType } from '../../services/FileServiceTypes';

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


export const getPhotos = createAsyncThunk("getPhotos/fetch", async (thunkAPI) => {
  const response = await fetch("http://localhost:8080/files/", {
      method: "GET"
  });
  const data = response.json()
  return data
})

export const uploadPhoto = createAsyncThunk("postPhoto/fetch", async (myData: {metadata: MetadataType, content: Uint8Array}) => {
  console.log("uploadPhotoReducer")
  const { metadata, content } = myData
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Private-Network': 'true',
    },
  };

  headers.headers['Content-Type'] = 'application/json';
  const response = await fetch("http://localhost:8080/files/", {
      method: "POST",
      headers: headers.headers,
      body: JSON.stringify({
        metadata
      })
  });
  const data = await response.json()
  headers.headers['Content-Type'] = data.type;
  const innerResponse = await fetch(data.headers.location, {
    method: "PUT",
    headers: headers.headers,
    body: JSON.stringify({
      content
    })
  })
  const finalData = await innerResponse.json()
  return finalData
})

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
  extraReducers:(builder) => {
    builder.addCase(uploadPhoto.fulfilled, (state, action) =>{
      state.error = false;
      state.errorStatus = null;
      state.success = true;
      state.response = action.payload;
  });
  }
});

export const { setError, setSuccess } = fileStatusSlice.actions;

export const selectIsError = (state: RootState) => state.fileStatus.error;
export const selectErrorStatus = (state: RootState) => state.fileStatus.errorStatus;
export const selectIsSuccess = (state: RootState) => state.fileStatus.success;
export const selectResponse = (state: RootState) => state.fileStatus.response;

export default fileStatusSlice.reducer;
