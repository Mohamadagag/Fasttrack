import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import CarCard from '../../components/CarCard';
import cars from '../../data/luxuryCars.js';

const LuxuryCars = () => {
  const { t } = useTranslation();
  return (
    <div className='md:my-20 my-5'>
      <Head>
        <title>Fast Track | {t(`common:luxury_cars`)}</title>
        <link rel='icon' href='/new-logo-icon.ico' />
      </Head>
      <h1 className='md:my-20 mx-5 md:mx-32 text-center md:text-left text-3xl text-primary mb-16'>
        {t('common:luxury_cars')}
      </h1>
      <div className='text-text leading-8 tracking-wide mx-5 md:mx-32 my-20'>
        <p>{t(`common:luxury_cars_paragraph_1`)}</p>
        <p>{t(`common:luxury_cars_paragraph_2`)}</p>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-4 gap-4 md:mx-32 mx-5'>
        {cars.map((car, index) => (
          <CarCard
            key={car.id}
            id={car.id}
            img={car.urls[0]}
            name={car.name}
            img_alt={car.name}
          />
        ))}
      </div>
    </div>
  );
};
export default LuxuryCars;
