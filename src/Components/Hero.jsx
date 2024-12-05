import React, { useEffect } from 'react';

function Hero() {
  const heroes = [
    {
      id: 1,
      name: 'Give Your Helping Hand',
      description: `At FundHive, every contribution counts. By extending your support,
       you’re not just funding projects—you’re changing lives. 
       Your generosity can help someone overcome challenges, 
       bring innovative ideas to life, or support a dream that might otherwise remain unfulfilled. 
       Together, we make a difference.`,
      image: 'https://i.ibb.co.com/vVBh1vw/hero-1.jpg',
    },
    {
      id: 2,
      name: 'Art and Creativity for Everyone',
      description: `At FundHive, you have the power to fuel creativity.
       By donating to fundraisers focused on art and expression,
       you help bring unique ideas to life. Your support allows artists to showcase their talent,
       create meaningful projects, and inspire others, making the world a more vibrant place.`,
      image: 'https://i.ibb.co.com/kDhMLLq/hero-2.jpg',
    },
    {
      id: 3,
      name: 'Help patients in hospital and sufferers',
      description: `At FundHive, your donation can make a life-changing difference. 
      By contributing to our charity fundraisers, 
      you help patients and those suffering from illness receive the care they need. 
      Your generosity brings hope, healing, 
      and a brighter future to those facing health challenges.






`,
      image:
        'https://i.ibb.co.com/frzbh6B/activities-of-people-in-the-hospital-health-medical-hospital-activities-people-free-photo.jpg',
    },
  ];
  function Action(props) {
    return (
      <>
        <a href={`#slide${props.id - 1}`} className='btn btn-circle'>
          ❮
        </a>
        <a
          href={`#slide${props.id === heroes.length ? 1 : props.id + 1}`}
          className='btn btn-circle'>
          ❯
        </a>
      </>
    );
  }

  return (
    <>
      <div className='carousel w-full'>
        {heroes.map((hero) => (
          <div
            key={hero.id}
            id={`slide${hero.id}`}
            className='carousel-item relative w-full'>
            <div>
              <div
                className='hero min-h-screen  w-[100vw] bg-cover bg-center'
                style={{
                  backgroundImage: `url(${hero.image})`,
                }}>
                <div className='hero-overlay bg-opacity-60'></div>
                <div className='hero-content text-neutral-content text-center'>
                  <div className='max-w-md'>
                    <h1 className='mb-5 text-5xl font-bold'>{hero.name}</h1>
                    <p className='mb-5'>{hero.description}</p>
                    <button className='btn rounded-full bg-hive px-10 border-none'>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
              <Action id={hero.id}></Action>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Hero;
