import React, { useEffect } from 'react';
import Navbar from './../Components/Navbar';
import Footer from './../Components/Footer';
import Hero from './../Components/Hero';
import { Link } from 'react-router';
import { use } from 'react';

function Home() {
  const [allCards, setAllCards] = React.useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/api/campaigns/q/6')
      .then((res) => res.json())
      .then((res) => setAllCards(res));
  }, []);

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
              <button className='btn bg-hive rounded-full px-20 text-black hover:bg-orange-400'>
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
        <div className='cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {allCards.map((card) => {
            return (
              <div className='cards md:max-w-9/12 mx-auto' key={card._id}>
                <div className='card w-[300px] shadow-xl bg-hive mx-auto'>
                  <figure className='px-4 pt-4'>
                    <img
                      src={card.thumbnail}
                      alt='Shoes'
                      className='rounded-xl'
                    />
                  </figure>
                  <div className='card-body items-center text-center text-black'>
                    <h2 className='card-title font-bold'>{card.title}</h2>
                    <p>{card.description}</p>
                    <div className='card-actions'>
                      <Link
                        to={`/campaign/${card._id}`}
                        className='btn bg-white text-black px-5 rounded-full border-none hover:text-white hover:bg-gray-700'>
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
              <button className='btn bg-hive rounded-full px-20 text-black hover:bg-orange-400'>
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
      <section className='py-20'>
        <div className='section-header text-center py-20'>
          <h1 className='text-5xl font-bold'>Contact Us</h1>
          <p>You can contact us to know about us or want to work with us.</p>
        </div>
        <div className='flex flex-col-reverse lg:flex-row-reverse gap-10'>
          <div className='mx-auto'>
            <h2 className='text-3xl font-bold'>Contact Us</h2>
            <form action='' className='flex flex-col gap-4'>
              <input
                type='text'
                className='input input-bordered w-full max-w-xs'
                placeholder='Name'
              />
              <input
                type='email'
                className='input input-bordered w-full max-w-xs'
                placeholder='Email'
              />
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Message'
                className='input input-bordered w-full max-w-xs'></textarea>
              <button className='btn bg-hive rounded-lg max-w-xs text-black hover:bg-orange-400'>
                Submit
              </button>
            </form>
          </div>
          <div className='mx-auto max-w-md'>
            <div className='collapse collapse-arrow bg-base-200'>
              <input type='radio' name='my-accordion-2' defaultChecked />
              <div className='collapse-title text-xl font-medium'>
                What is FundHive?
              </div>
              <div className='collapse-content'>
                <p>
                  FundHive is a crowdfunding platform where you can raise funds
                  for personal, creative, or startup projects. It connects you
                  with a community of supporters to help turn your ideas into
                  reality.
                </p>
              </div>
            </div>

            <div className='collapse collapse-arrow bg-base-200'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-xl font-medium'>
                How do I start a campaign?
              </div>
              <div className='collapse-content'>
                <p>
                  Simply create an account, describe your project, set a funding
                  goal, and share your campaign with friends and supporters. The
                  more people you reach, the closer you get to achieving your
                  goal!
                </p>
              </div>
            </div>

            <div className='collapse collapse-arrow bg-base-200'>
              <input type='radio' name='my-accordion-2' />
              <div className='collapse-title text-xl font-medium'>
                Is FundHive secure?
              </div>
              <div className='collapse-content'>
                <p>
                  Yes, FundHive ensures secure transactions for both fundraisers
                  and donors. We use industry-standard encryption to protect all
                  sensitive information, ensuring your privacy and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
