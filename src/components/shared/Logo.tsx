import React from 'react'
import { Link } from 'react-router-dom'
import LogoSrc from '../../assets/Logo.svg'

const Logo = () => {
  return (
    <div className='flex items-center justify-start'>
        <Link to='/'>
          <div className='w-40 h-full p-1 '>
            <img src={LogoSrc} alt='logo' className='h-full' />
          </div>
        </Link>
      </div>
  )
}

export default Logo
