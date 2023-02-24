import React from 'react';
import { BsFillPhoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import ProfilePicture from './ProfilePicture';

const ProfilesHeader = () => {
  return (
    <div className={`flex w-screen h-56 text-white bg-zinc-600`}>
      <ProfilePicture />
      <div className='w-full'>
        <div className={`flex items-center justify-between pr-5 pl-60 h-1/2`}>
          <div className='flex flex-col items-start'>
            <h1 className='text-3xl font-bold'>Thoms Ayling</h1>
            <h2 className='text-2xl'>Developer</h2>
          </div>
          <div className='flex flex-col items-end justify-self-end w-content'>
            <div className='mb-2 profiles-header-contact-details'>
              <BsFillPhoneFill className='mr-2' />
              <span>+44 7384 672 366</span>
            </div>
            <div className='profiles-header-contact-details'>
              <MdEmail className='mr-2' />
              <span>tjayling@yahoo.co.uk</span>
            </div>
          </div>
        </div>
        <div className='grid items-center grid-cols-3 pr-5 bg-zinc-500 h-1/2'>
          <div></div>
          <div className='grid grid-cols-4'>
            <div className='profiles-header-summary-item'>
              <span className='profiles-header-summary-item-value'>Nov 22</span>
              <span className='profiles-header-summary-item-title'>Start Date</span>
            </div>
            <div className='profiles-header-summary-item-right'>
              <span className='profiles-header-summary-item-value'>8 Mos</span>
              <span className='profiles-header-summary-item-title'>Experience</span>
            </div>
            <div className='border-l-2 border-white/10 profiles-header-summary-item'>
              <span className='profiles-header-summary-item-value'>Band</span>
              <span className='profiles-header-summary-item-title'>TE02</span>
            </div>
            <div className='border-l-2 border-white/10 profiles-header-summary-item'>
              <span className='profiles-header-summary-item-value'>Manchester</span>
              <span className='profiles-header-summary-item-title'>Location</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilesHeader;
