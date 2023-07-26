import Link from 'next/link';
import React from 'react';
import Menu from './Menu';

const Header = () => {
  return (
    <div className='flex flex-col text-primary sticky top-0 z-20 bg-background'>
      {/* SOCIAL ICONS */}
      <div className='flex justify-center py-3'>
        <Link
          className='hover:scale-105 transition duration-75'
          href={'https://wa.me/33749953884'}
          target='_blank'
        >
          <img
            className='w-5 h-5 mx-3'
            alt='whatsapp'
            src='/whatsapp_logo.png'
          />
        </Link>
        <Link
          className='hover:scale-105 transition duration-75'
          href={'https://facebook.com/fastrack.dubai'}
          target='_blank'
        >
          <img
            className='w-5 h-5 mx-3'
            alt='facebook'
            src='/facebook_logo.png'
          />
        </Link>
        <Link
          className='hover:scale-105 transition duration-75'
          href={'https://instagram.com/fastrack.dubai'}
          target='_blank'
        >
          <img
            className='w-5 h-5 mx-3'
            alt='instagram'
            src='/instagram_logo.png'
          />
        </Link>
        <Link
          className='hover:scale-105 transition duration-75'
          href={'https://www.youtube.com/@fasttrackrentacar2193'}
          target='_blank'
        >
          <img className='w-6 h-6 mx-3' alt='youtube' src='/youtube_logo.png' />
        </Link>
      </div>
      {/* DIVIDER with low opacity */}
      <span className='w-full p-[0.5px] bg-primary opacity-10'></span>
      {/* MENU */}
      <Menu />
    </div>
  );
};

export default Header;
