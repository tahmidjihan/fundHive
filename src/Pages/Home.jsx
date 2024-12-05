import React from 'react';
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import Hero from './../Components/Hero';

function Home() {
  return (
    <>
      <Hero></Hero>
      <section>
        <div className='hero py-20'>
          <div className='hero-content flex-col lg:flex-row'>
            <img
              src='https://i.ibb.co.com/SvsrpPC/finance.jpg'
              className='max-w-sm rounded-lg h-full w-full'
            />
            <div>
              <h1 className='text-5xl font-bold'>About Us</h1>
              <p className='py-6'>
                At FundHive, we believe in the power of community to bring ideas
                to life. Our platform connects dreamers, innovators, and
                change-makers with supporters who share their vision. Whether
                it’s personal needs, creative projects, or groundbreaking
                startups, FundHive empowers everyone to fund their dreams and
                make an impact. Together, we build a hive of possibilities.
              </p>
              <button className='btn bg-hive rounded-full px-20'>
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className='border-b-2 border-t-0 py-10 mx-10 md:mx-32 ' />
      <section className='py-20'>
        <div className='section-header text-center'>
          <h1 className='font-extrabold text-4xl'>Featured Campaigns</h1>
          <p>Explore our most popular campaigns</p>
        </div>
        <div className='cards md:max-w-9/12 mx-auto'>
          <div class='card w-[300px] shadow-xl bg-hive mx-auto'>
            <figure class='px-4 pt-4'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp'
                alt='Shoes'
                class='rounded-xl'
              />
            </figure>
            <div class='card-body items-center text-center'>
              <h2 class='card-title font-bold'>Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class='card-actions'>
                <button class='btn bg-white text-black px-5 rounded-full'>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className='border-b-2 border-t-0 py-10 mx-10 md:mx-32 ' />
      <section>
        <div className='hero py-20'>
          <div className='hero-content flex-col lg:flex-row'>
            <div>
              <h1 className='text-5xl font-bold'>
                Turn Dreams into Reality with FundHive
              </h1>
              <p className='py-6'>
                At FundHive, we’re more than a crowdfunding platform—we’re a
                launchpad for aspirations. Whether you're creating, innovating,
                or overcoming personal challenges, FundHive connects you with a
                supportive community ready to back your vision. Together, we
                turn ambitions into achievements.
              </p>
              <button className='btn bg-hive rounded-full px-20'>
                Read More
              </button>
            </div>
            <img
              src='https://i.ibb.co.com/5KF6b50/dreamer.jpg'
              className='max-w-sm rounded-lg h-full w-full'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
