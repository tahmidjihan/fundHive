import React from 'react';
import { Link } from 'react-router';

function Err() {
  return (
    <>
      <div className='flex justify-around flex-col md:flex-row'>
        <div className='flex flex-col justify-center align-middle mx-auto md:mx-10'>
          <h1 className='text-9xl font-extrabold'>404</h1>
          <h2 className='text-6xl font-bold'>Page Not Found</h2>
          <h2 className='text-3xl font-bold my-5'>Don't Cry</h2>
          <Link
            to={'/'}
            className='btn px-10 rounded-full mt-4 md:mt-7  bg-hive text-black'>
            Go back to home
          </Link>
        </div>
        <div>
          <img src='https://i.ibb.co.com/WKpZKvy/404.png' alt='' />
        </div>
      </div>
    </>
  );
}

export default Err;
