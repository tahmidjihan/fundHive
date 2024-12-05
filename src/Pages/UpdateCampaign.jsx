import React from 'react';
import Campaign from './Campaign';

function UpdateCampaign() {
  return (
    <>
      <div className='min-h-screen '>
        <div className='flex align-middle w-9/12 mx-auto flex-col-reverse lg:flex-row gap-20 justify-around'>
          <div className='text-start my-10'>
            <h1 className='text-5xl font-extrabold'>Update Campaign</h1>
            <p className='max-w-md'>
              Donate on people need, creative ideas, or innovative startups with
              a community that believes in you. Donation can help someone
              overcome challenges, bring innovative ideas to life, or support a
              dream that might otherwise remain unfulfilled.
            </p>
            <form action='' className='flex flex-col gap-4 mt-10'>
              <input
                type='email'
                placeholder='Enter email'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='text'
                placeholder='Enter Name'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='text'
                placeholder='Enter Title'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='text'
                placeholder='Enter Content type'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='number'
                placeholder='Enter Phone Number'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='number'
                placeholder='Enter Minimum Donation'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='text'
                placeholder='Thumbnail URL'
                className='input input-bordered w-full max-w-xs'
                required
              />

              <input
                type='number'
                placeholder='Enter Goal Amount'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='text'
                placeholder='Enter Deadline : MM/DD/YYYY'
                className='input input-bordered w-full max-w-xs'
                required
              />
              <textarea
                className='textarea textarea-bordered h-24 w-full max-w-xs'
                cols='30'
                rows='10'
                placeholder='Description'></textarea>
              <button className='btn bg-hive rounded-lg max-w-xs' type='submit'>
                Update
              </button>
            </form>
          </div>
          <div>
            <img src='https://i.ibb.co.com/djsJxRx/update.png' alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateCampaign;
