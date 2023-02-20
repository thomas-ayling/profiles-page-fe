import axios from 'axios';
import { Crc32c } from '@aws-crypto/crc32c';
import { MetadataType } from '../types/FileServiceTypes';

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

const uploadFile = (file: File) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    const arrayBuffer = new Uint8Array(e?.target?.result as ArrayBuffer);
    const crc = new Crc32c().update(arrayBuffer).digest();

    const metadata: MetadataType = {
      name: file.name,
      type: file.type,
      size: file.size,
      crc: crc,
    };

    headers.headers['Content-Type'] = 'application/json';
    axios
      .post(url, metadata, headers)
      .then((res) => {
        headers.headers['Content-Type'] = metadata.type;
        axios
          .put(res.headers.location, arrayBuffer, headers)
          .then((res) => {
            console.log('res.status', res.status);
          })
          .catch((err) => {
            //TODO: Implement error handling
            console.error('Error streaming data: ', err);
          });
      })
      .catch((err) => {
        //TODO: Implement error handling
        console.error('Error uploading metadata: ', err);
      });
  };

  reader.onerror = (e) => {
    //TODO: Implement error handling
    console.error('Error reading file', e);
  };

  reader.readAsArrayBuffer(file);
};

export { uploadFile };
