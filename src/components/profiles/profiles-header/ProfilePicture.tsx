import React from 'react';
import { ProfilePictures } from '../../../images';

const CoverImage = () => {
  return (
    <div className={`h-56 absolute aspect-square p-5 bg-zinc-600 rounded-full`}>
      <div className='h-full rounded-full aspect-square'>
        <img className='w-full rounded-full aspect-square' src={ProfilePictures.Placeholder} alt='profile' />
      </div>
    </div>
  );
};

export default CoverImage;
