import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { setError, setSuccess } from '../store/reducers/fileStatusSlice';
import { MetadataType } from './types/FileServiceTypes';

export const uploadFile = (metadata: MetadataType, content: Uint8Array) => {
  return async (dispatch: Dispatch) => {
    const baseUrl = 'http://localhost:8080/files/';
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Private-Network': 'true',
      },
    };

    try {
      const metadataResponse = await axios.post(baseUrl, metadata, headers);
      await axios.put(metadataResponse.headers.location, content, headers);
      dispatch(
        setSuccess({
          response: { message: metadata.name + ' uploaded successfuly and available at ' + metadataResponse.headers.location },
        })
      );
    } catch (error) {
      dispatch(
        setError({
          errorStatus: { message: 'There was an error saving this file', error: error },
        })
      );
    }
  };
};
