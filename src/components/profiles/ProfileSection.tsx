import React, { ReactNode } from 'react';
// import { ReactNode } from '../types/ReactNodeType';

type Props = {
  children: ReactNode;
  title: string;
  icon?: ReactNode;
};

const ProfileSection = ({ children, title, icon }: Props) => {
  return (
    <div className='flex flex-col w-full px-3 py-1 my-5 border-2 rounded-sm bg-zinc-50 border-black/10'>
      <div className='flex items-center w-h-full'>
        {icon ? <span className='mr-2 '>{icon}</span> : null}
        <h1 className='py-2 text-2xl'>{title}</h1>
      </div>
      <hr />
      <div className='py-2'>{children}</div>
    </div>
  );
};

export default ProfileSection;
