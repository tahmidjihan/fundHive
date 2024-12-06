import React from 'react';
import { authContext } from '../AuthProvider';

function AddCampaign() {
  const { user } = React.useContext(authContext);
  return (
    <>
      <div className='min-h-screen '>
        <div className='flex align-middle w-9/12 mx-auto flex-col-reverse lg:flex-row gap-20 justify-around'>
          <div className='text-start my-10'>
            <h1 className='text-5xl font-extrabold'>Add a Campaign</h1>
            <p className='max-w-md'>
              Add a new campaign to our platform and let your dream come true.
              Raise money, connect with supporters, and make a difference.
              Together, we can build a better world.
            </p>
            <form action='' className='flex flex-col gap-4 mt-10'>
              <input
                type='email'
                placeholder='Enter email'
                readOnly
                value={user.email}
                className='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='text'
                placeholder='Enter Name'
                readOnly
                value={user.displayName}
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
                name=''
                className='textarea textarea-bordered h-24 w-full max-w-xs'
                id=''
                cols='30'
                rows='10'
                placeholder='Description'></textarea>
              <button className='btn bg-hive rounded-lg max-w-xs' type='submit'>
                Submit
              </button>
            </form>
          </div>
          <div>
            <img src='https://i.ibb.co.com/wMcrHHk/campaign.png' alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCampaign;
