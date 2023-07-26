import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Fast Track | {t(`common:privacy_policy`)}</title>
        <link rel='icon' href='/new-logo-icon.ico' />
      </Head>
      <div className='flex flex-col'>
        <span className='w-full p-[0.5px] bg-primary opacity-10'></span>
        <div className='mx-5 md:mx-32 mt-20'>
          <h1 className='text-center md:text-left text-5xl text-primary mb-16'>
            {t(`common:privacy_policy`)}
          </h1>
          <div className='text-text leading-8 tracking-wide'>
            <p>{t(`common:privacy_policy_desc_1`)}</p>
            <p>{t(`common:privacy_policy_desc_2`)}</p>
            <h3 className='font-semibold my-8'>
              {t(`common:information_collection_and_use`)}
            </h3>
            <p>{t(`common:information_collection_and_use_desc`)}</p>
            <h3 className='font-semibold my-8'>{t(`common:log_data`)}</h3>
            <p>{t(`common:log_data_desc`)}</p>
            <h3 className='font-semibold my-8'>{t(`common:communications`)}</h3>
            <p>{t(`common:communications_desc`)}</p>
            <h3 className='font-semibold my-8'>{t(`common:cookies`)}</h3>
            <p>{t(`common:cookies_desc`)}</p>
            <h3 className='font-semibold my-8'>
              {t(`common:privacy_policy_security`)}
            </h3>
            <p>{t(`common:privacy_policy_security_desc`)}</p>
            <h3 className='font-semibold my-8'>
              {t(`common:changes_to_this_privacy_policy`)}
            </h3>
            <p>{t(`common:changes_to_this_privacy_policy_desc`)}</p>
            <h3 className='font-semibold my-8'>
              {t(`common:privacy_policy_contact_us`)}
            </h3>
            <p>
              {t(`common:privacy_policy_contact_us_desc`)}
              <Link className='underline' href={'contact-us'}>
                {t(`common:contact_us`)}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
