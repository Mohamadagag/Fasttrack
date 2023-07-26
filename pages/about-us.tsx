import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React from 'react';

const AboutUs = () => {
  let { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Fast Track | {t('common:about_us')}</title>
        <link rel='icon' href='/new-logo-icon.ico' />
      </Head>
      <div className='flex flex-col'>
        <span className='w-full p-[0.5px] bg-primary opacity-10'></span>
        <div className='mx-5 md:mx-32 mt-20'>
          <h1 className='text-center md:text-left text-5xl text-primary mb-16'>
            {t('common:welcome')}
          </h1>
          <div className='text-text leading-8 tracking-wide'>
            <p>{t('common:about_us_text_1')}</p>
            <p>{t('common:about_us_text_2')}</p>
            <p>{t('common:about_us_text_3')}</p>
            <p>{t('common:about_us_text_4')}</p>
            <p>{t('common:about_us_text_5')}</p>
            <p>{t('common:about_us_text_6')}</p>
            {/* <p>{t('common:about_us_text_7')}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
