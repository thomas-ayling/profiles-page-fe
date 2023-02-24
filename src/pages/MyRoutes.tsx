import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';

const MyRoutes = () => {
  return (
    <div className='flex-grow'>
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
    </div>
  );
};

export default MyRoutes;
