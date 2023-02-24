import React from 'react';
import { BsPersonFill } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../shared/Logo';

const Navbar = () => {
  return (
    <nav className='grid w-screen h-20 grid-cols-3 p-4 border-b-2 justify-evenly bg-zinc-600 border-b-white/10'>
      <Logo/>
      <ul className='flex items-center justify-center gap-5'>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? 'navlink-active' : 'navlink')}>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/feed' className={({ isActive }) => (isActive ? 'navlink-active' : 'navlink')}>
            <span>Feed</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/search' className={({ isActive }) => (isActive ? 'navlink-active' : 'navlink')}>
            <span>Search</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile' className={({ isActive }) => (isActive ? 'navlink-active' : 'navlink')}>
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>
      <div className='flex items-center justify-end '>
        <Link to='account'>
          <div className='flex items-center justify-around p-2 transition duration-500 rounded-full w-fit h-11 bg-zinc-600 hover:bg-zinc-700'>
            <span className='mx-2 font-bold text-white'>Sign in</span>
            <BsPersonFill color='white' className='w-auto h-full fg-white' />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
