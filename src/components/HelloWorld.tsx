import { Crc32c } from '@aws-crypto/crc32c';
import React from 'react';
import { Logos, Headers } from '../images';
import { useAppDispatch } from '../lib/store/hooks/hooks';

const HelloWorld = () => {
  const dispatch = useAppDispatch();

  const handleNewFile = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e?.target.files) {
      dispatch(uploadFile(e.target.files[0]))
    }
  };

  return (
    <div>
      <h1 className='text-3xl font-bold underline text-slate-700'>Welcome</h1>
      <input type='file' onChange={(e) => handleNewFile(e)} />
      {/* <img src={Logos.LogoSmall} /> */}
      <img src={Headers.ManchesterLarge} />
    </div>
  );
};

export default HelloWorld;
