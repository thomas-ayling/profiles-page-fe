import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const AccountIcon = () => {
  return (
    <div className='flex items-center justify-end '>
      <Link to='account'>
        <div className='flex items-center justify-around p-2 transition duration-500 rounded-full w-fit h-11 bg-zinc-600 hover:bg-zinc-700'>
          <span className='mx-2 font-bold text-white'>Sign in</span>
          <BsPersonFill color='white' className='w-auto h-full fg-white' />
        </div>
      </Link>
    </div>
  );
};

export default AccountIcon;
