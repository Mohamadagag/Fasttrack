import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

const Welcome = () => {
  let { t, lang } = useTranslation();

  return (
    <div className='my-12 md:my-24 text-text tracking-wide'>
      <h1 className='text-primary text-4xl font-normal'>
        {t('common:welcome')}
      </h1>
      <p className='mx-5 md:mx-48 mt-4 leading-8'>
        {t('common:welcome_message')}
      </p>
      <div className='mt-8'>
        <Link
          className='border-4 border-primary px-8 py-2 rounded-2xl text-sm font-bold transition duration-200 hover:text-background hover:bg-primary'
          href={'about-us'}
        >
          {t('common:explore_us')}
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
