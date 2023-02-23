import { Crc32c } from '@aws-crypto/crc32c';
import React, { useEffect, useState } from 'react';
import { Headers } from '../images';
import { MetadataType } from '../lib/services/FileServiceTypes';
import { useAppDispatch, useAppSelector } from '../lib/store/hooks/hooks';
import { uploadFile } from '../lib/services/FileService';
import { toast } from 'react-toastify';
import { resetFileStatus, selectFileStatus } from '../lib/store/reducers/FileStatusSlice';

const Homepage = () => {
  const [file, setFile] = useState<File>();

  const status = useAppSelector(selectFileStatus);
  useEffect(() => {
    if (status.error) {
      toast.error(`${status.errorStatus?.message} status ${status.errorStatus?.message}`);
    }
    if (status.success) {
      toast.success(`${status.response}`);
    }
    return () => {
      if (status.error || status.success) {
        dispatch(resetFileStatus());
      }
    };
  }, [status]);

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
        toast.error('Error reading file data.');
      };
      
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-bold underline text-slate-700'>Welcome</h1>
      <div className='flex flex-col items-center justify-around w-1/6 h-40'>
        <label htmlFor='myfile'>Select a file:</label>
        <input className='w-56 overflow-scroll' type='file' id='myfile' name='myfile' onChange={(e) => handleNewFile(e)} />
        <button className='w-1/2 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700' onClick={handleUpload}>
          Upload
        </button>
        <button onClick={() => toast.success('Woww', { theme: 'colored' })}>Toast</button>
      </div>
      {/* <img src={Logos.LogoSmall} /> */}
      <img alt='Manchester at night' src={Headers.ManchesterLarge} />
    </div>
  );
};

export default Homepage;
