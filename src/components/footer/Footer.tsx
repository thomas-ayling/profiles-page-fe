import React from 'react';
import Logo from '../shared/Logo';

const Footer = () => {
  return (
    <div className='self-end w-screen bg-zinc-600 text-zinc-50'>
      <div className='grid w-screen grid-cols-3 px-5 pt-5 h-60 justify-evenly '>
        <div>
          <Logo />
        </div>
        <div className=' border-x-2 border-white/10'></div>
        <div></div>
      </div>
      <div className='flex justify-center p-2'>
        <span>2023 Copyright GlobalLogic Inc. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
