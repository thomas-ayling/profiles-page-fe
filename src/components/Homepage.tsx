import { Crc32c } from '@aws-crypto/crc32c';
import React, { useState } from 'react';
import {  Headers } from '../images';
import { MetadataType } from '../lib/services/FileServiceTypes';
import { useAppDispatch } from '../lib/store/hooks/hooks';
import { uploadFile } from '../lib/services/FileService';

const Homepage = () => {
  const [file, setFile] = useState<File>();

  const dispatch = useAppDispatch();

  const handleNewFile = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e?.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
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

        dispatch(uploadFile(metadata, content));
      };

      reader.onerror = (e) => {
        // TODO: Dispatch file reader error
        // dispatch()
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div>
      <h1 className='text-3xl font-bold underline text-slate-700'>Welcome</h1>
      <div className='flex flex-col justify-around w-1/6 h-40'>
        <label htmlFor='myfile'>Select a file:</label>
        <input type='file' id='myfile' name='myfile' onChange={(e) => handleNewFile(e)} />
        <button className='w-1/2 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700' onClick={handleUpload}>
          Upload
        </button>
      </div>
      {/* <img src={Logos.LogoSmall} /> */}
      <img alt='Manchester at night' src={Headers.ManchesterLarge} />
    </div>
  );
};

export default Homepage;
