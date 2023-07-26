import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CarCard from '../../components/CarCard';
import allbrands from '../../data/allBrands.js';

const collections = () => {
  const { t } = useTranslation();
  return (
    <div className='my-20'>
      <Head>
        <title>Fast Track | {t(`common:all_brands`)}</title>
        <link rel='icon' href='/new-logo-icon.ico' />
      </Head>
      <h1 className='my-20 mx-5 md:mx-32 text-center md:text-left text-3xl text-primary mb-16'>
        {t(`common:all_brands`)}
      </h1>
      <div className='flex flex-col md:grid md:grid-cols-4 gap-4 md:mx-32 mx-5'>
        {allbrands.map((brand, index) => (
          <Link
            key={index}
            href={`/collections/${brand.url}`}
            className='flex flex-col hover:scale-105 transition duration-500'
          >
            <img src={`/${brand.img}`} alt={brand.name} />
            <div className='py-5 px-2 bg-primary bg-opacity-10 text-primary'>
              <h1 className='text-left font-semibold'>{brand.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default collections;
