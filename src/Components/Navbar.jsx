import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  function Menu() {
    return (
      <>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/campaigns'}>Campaigns</Link>
        </li>
        <li>
          <Link to={'/donations'}>Donations</Link>
        </li>
        <div className='lg:hidden'>
          <li>
            <Link to={'/login'} className='btn btn-ghost rounded-full px-5'>
              Login
            </Link>
          </li>
          <li>
            <Link to={'/register'} className='btn rounded-full px-5'>
              Get Started
            </Link>
          </li>
        </div>
      </>
    );
  }
  return (
    <>
      <div className='navbar bg-hive'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'>
              <Menu />
            </ul>
          </div>
          <a className='btn btn-ghost text-xl font-extrabold'>FundHive</a>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            <Menu />
          </ul>
        </div>
        <div className='navbar-end lg:flex hidden '>
          <Link to={'/login'} className='btn btn-ghost rounded-full px-5'>
            Login
          </Link>

          <Link to={'/register'} className='btn rounded-full px-5'>
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
