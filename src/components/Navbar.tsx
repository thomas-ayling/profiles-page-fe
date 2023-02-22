import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import { BsPersonFill } from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className='grid w-screen h-20 grid-cols-3 p-4 justify-evenly bg-zinc-600'>
      <div className='flex items-center justify-start'>
        <Link to='/'>
          <div className='w-40 h-full p-1 '>
            <img src={Logo} alt='logo' className='h-full' />
          </div>
        </Link>
      </div>
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
          <div className='p-2 transition duration-500 rounded-full w-11 h-11 bg-zinc-700 hover:bg-zinc-800'>
            <BsPersonFill color='white' className='w-auto h-full fg-white' />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
