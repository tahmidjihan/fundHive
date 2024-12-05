import React from 'react';

function Campaign() {
  return (
    <>
      <div className='min-h-screen '>
        <div className='flex align-middle w-9/12 mx-auto flex-col-reverse lg:flex-row gap-20 justify-around'>
          <div className='text-start my-10'>
            <h1 className='text-5xl font-extrabold'>Donate Now!</h1>
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
                class='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='number'
                placeholder='Enter Phone Number'
                class='input input-bordered w-full max-w-xs'
                required
              />
              <input
                type='number'
                placeholder='Enter amount'
                class='input input-bordered w-full max-w-xs'
                required
              />
              <textarea
                name=''
                className='textarea textarea-bordered h-24 w-full max-w-xs'
                id=''
                cols='30'
                rows='10'
                placeholder='Message'></textarea>
              <button class='btn bg-hive rounded-lg max-w-xs' type='submit'>
                Submit
              </button>
            </form>
          </div>
          <div className='py-10'>
            <img
              src='https://i.ibb.co.com/frzbh6B/activities-of-people-in-the-hospital-health-medical-hospital-activities-people-free-photo.jpg'
              alt=''
              className='w-auto md:h-96'
            />
            <h1 className='text-3xl font-extrabold'>Campaign 1</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus distinctio odit porro reiciendis at soluta? Accusamus
              odio debitis vitae laborum.
            </p>
            <h2 className='text-xl font-bold'>Goal: $1000</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Campaign;
