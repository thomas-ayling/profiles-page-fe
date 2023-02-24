import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Account from './Account';
import Feed from './Feed';
import Homepage from './Homepage';
import Profile from './Profile';
import Search from './Search';

const MyRoutes = () => {
  return (
    <div className='flex-grow'>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/search' element={<Search />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/account' element={<Account />} />
    </Routes>
    </div>
  );
};

export default MyRoutes;
