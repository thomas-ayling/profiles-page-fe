import React, { useState } from 'react';
import {  Headers } from '../images';
import { useAppDispatch } from '../lib/store/hooks/hooks';
import { Crc32c } from '@aws-crypto/crc32c';
import { MetadataType } from './HelloWorldTypes'
import { uploadPhoto } from '../lib/store/reducers/fileStatusSlice';



const HelloWorld = () => {
  const [file, setFile] = useState<File>();

  const dispatch = useAppDispatch();


const uploadFile = () => {
  //Able to read the file that has been uploaded
  console.log(file)

  //Let's talk about this part. What are you trying to do? -> the file can be read as just file
  const reader = new FileReader();
   reader.onload = (e) => {
    const content = new Uint8Array(e?.target?.result as ArrayBuffer);
    const crc = new Crc32c().update(content).digest();

    const metadata: MetadataType = {
      name: file?.name,
      type: file?.type,
      size: file?.size,
      crc: crc,
    };
    dispatch(uploadPhoto({metadata, content}))
  };
}

  const handleNewFile = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (e?.target.files) {
      setFile(e.target.files[0])
    }
  };

  return (
    <div>
      <h1 className='text-3xl font-bold underline text-slate-700'>Welcome</h1>
      <label htmlFor="myfile">Select a file:</label>
      <input type="file" id="myfile" name="myfile" onChange={(e) => handleNewFile(e)}/>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={uploadFile}>Upload</button>
      {/* <img src={Logos.LogoSmall} /> */}
      <img alt="Manchester at night" src={Headers.ManchesterLarge} />
    </div>
  );
};

export default HelloWorld;
