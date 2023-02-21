import axios from 'axios';
import { Crc32c } from '@aws-crypto/crc32c';
import { MetadataType } from './types/FileServiceTypes';
import { setError, setSuccess } from '../store/reducers/fileStatusSlice';
import { Action, AnyAction, Dispatch } from 'redux';
import { AppDispatch, store } from '../store/store';
import { useAppDispatch } from '../store/hooks/hooks';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:8080/files/';
const headers = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Private-Network': 'true',
  },
};

const uploadFileReducer = (file: File) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    const content = new Uint8Array(e?.target?.result as ArrayBuffer);
    const crc = new Crc32c().update(content).digest();

    const metadata: MetadataType = {
      name: file.name,
      type: file.type,
      size: file.size,
      crc: crc,
    };

    headers.headers['Content-Type'] = 'application/json';
    axios
      .post(url, metadata, headers)
      .then((metadataResponse) => {
        headers.headers['Content-Type'] = metadata.type;
        axios
          .put(metadataResponse.headers.location, content, headers)
          .then((contentResponse) => {
            console.log('res.status', contentResponse.status);
            store.dispatch(
              setSuccess({
                response: { message: metadata.name + ' uploaded successfuly and available at ' + metadataResponse.headers.location },
              })
            );
          })
          .catch((err) => {
            console.error('Error streaming data: ', err);
            store.dispatch(setError({ errorStatus: { err } }));
          });
      })
      .catch((err) => {
        console.error('Error uploading metadata: ', err);
        store.dispatch(setError({ errorStatus: { err } }));
      });
  };

  reader.onerror = (e) => {
    console.error('Error reading file', e);
  };

  reader.readAsArrayBuffer(file);
};
