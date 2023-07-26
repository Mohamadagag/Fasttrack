import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React from 'react';

const Fleet = () => {
  let { t, lang } = useTranslation();

  return (
    <>
      <div className='mx-5 md:mx-32 mt-20'>
        <h1 className='text-center md:text-left text-3xl text-primary mb-16'>
          {t('common:our_fleet')}
        </h1>
        <div className='relative pt-[56.25%]'>
          <iframe
            src='https://www.youtube.com/embed/hqKzj5tfSyY'
            className='absolute inset-0 w-full h-full'
            frameBorder='0'
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Fleet;
