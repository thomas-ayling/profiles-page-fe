import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

import { setError, setSuccess } from '../store/reducers/FileStatusSlice';
import { MetadataType } from './FileServiceTypes';

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

    const metadataResponse = await axios.post(baseUrl, metadata, headers).catch((err) => {
      dispatch(
        setError({
          errorStatus: { status: err.status, message: err.message },
        })
      );
    });
    if (metadataResponse) {
      headers.headers['Content-Type'] = metadata.type;
      await axios
        .put(metadataResponse.headers.location, content, headers)
        .then(() =>
          dispatch(
            setSuccess({
              response: { fileName: metadata.name, fileLocation: metadataResponse.headers.location },
            })
          )
        )
        .catch((err) =>
          dispatch(
            setError({
              errorStatus: { status: err.status, message: err.message },
            })
          )
        );
    }
  };
};
