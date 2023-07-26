import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import React from 'react';

const RequiredDocs = () => {
  let { t, lang } = useTranslation();

  return (
    <div className='my-12 md:my-24 text-text tracking-wide'>
      <h1 className='text-primary text-2xl font-normal'>
        {t('common:documents_required')}
      </h1>
      <p className='mt-4 leading-8'>
        {t('common:documents_required_description')}
      </p>
      <div className='flex flex-col md:flex-row mx-5 md:mx-52 gap-2 my-12'>
        <div className='md:w-1/2 bg-primary bg-opacity-5 p-5'>
          <h2 className='text-primary text-xl'>
            {t('common:documents_required_1')}
          </h2>
          <ul className='mt-5'>
            <li>{t('common:documents_required_2')}</li>
            <li>{t('common:documents_required_3')}</li>
          </ul>
        </div>
        <div className='md:w-1/2 bg-primary bg-opacity-5 p-5'>
          <h2 className='text-primary text-xl'>
            {t('common:documents_required_4')}
          </h2>
          <ul className='mt-5'>
            <li>{t('common:documents_required_5')}</li>
            <li>{t('common:documents_required_6')}</li>
          </ul>
        </div>
      </div>
      <div className='mt-8'>
        <Link
          className='border-4 border-primary px-8 py-2 rounded-2xl text-sm font-bold transition duration-200 hover:text-background hover:bg-primary'
          href={'faq'}
        >
          {t('common:browse_our_faq')}
        </Link>
      </div>
    </div>
  );
};

export default RequiredDocs;
