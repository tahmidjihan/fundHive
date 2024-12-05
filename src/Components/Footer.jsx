import React from 'react';

function Footer() {
  return (
    <>
      <footer className='footer footer-center bg-hive text-black rounded p-10'>
        <nav className='grid grid-flow-col gap-4'>
          <a className='link link-hover'>About</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Campaigns</a>
          <a className='link link-hover'>Donate</a>
        </nav>

        <nav>
          <div className='grid grid-flow-col gap-4 md:gap-10'>
            <a>
              <img
                src='https://img.icons8.com/?size=100&id=118468&format=png&color=000000'
                alt=''
              />
            </a>
            <a>
              <img
                src='https://img.icons8.com/?size=100&id=447&format=png&color=000000'
                alt=''
              />
            </a>
            <a>
              <img
                src='https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000'
                alt=''
              />
            </a>
            <a>
              <img
                src='https://img.icons8.com/?size=100&id=32292&format=png&color=000000'
                alt=''
              />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            FundHive Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
