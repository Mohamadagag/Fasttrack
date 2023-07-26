import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  let { t } = useTranslation();

  const pages = [
    {
      name: `${t('common:about_us')}`,
      url: '/about-us',
    },
    {
      name: `${t('common:privacy_policy')}`,
      url: '/privacy-policy',
    },
    {
      name: `${t('common:terms_and_conditions')}`,
      url: '/terms-and-conditions',
    },
    {
      name: `${t('common:faq')}`,
      url: '/faq',
    },
    {
      name: `${t('common:contact_us')}`,
      url: '/contact-us',
    },
  ];
  return (
    <div className='flex flex-col text-primary py-10 tracking-wide'>
      <span className='w-full p-[0.5px] bg-primary opacity-10'></span>
      <h1 className='text-center mt-10 text-lg font-normal'>
        {t('common:help_and_information')}
      </h1>
      <div className=' flex flex-col md:flex-row items-center justify-center mt-8'>
        {pages.map((page) => (
          <Link
            key={page.url}
            className='mx-2 my-2 md:my-0 text-sm opacity-70 hover:opacity-100 hover:underline'
            href={page.url}
          >
            {page.name}
          </Link>
        ))}
      </div>
      <div className='flex justify-center mt-10'>
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
      <span className='w-full p-[0.5px] bg-primary opacity-10 mt-10'></span>
      <p className='text-center mt-10 text-xs font-light tracking-widest opacity-80'>
        2022, Fastrack Website by{' '}
        <a target={'_blank'} href='https://advertcommunications.com'>
          Advert Communications
        </a>{' '}
        ft.{' '}
        <a target={'_blank'} href='https://abdulkader.dev'>
          AK
        </a>
      </p>
    </div>
  );
};

export default Footer;
