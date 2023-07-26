import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import CarCard from '../../components/CarCard';
import allBrands from '../../data/allBrands.js';
import cars from '../../data/luxuryCars.js';

const brands = () => {
  const { brandurl } = useRouter().query;
  const brand = allBrands.filter((brand, index) => brand.url === brandurl)[0];

  const brandCars = cars.filter((car, index) => car.brand === brandurl);

  return (
    <div className='md:my-20 my-5'>
      <Head>
        <title>Fast Track | {brand?.name}</title>
        <link rel='icon' href='/new-logo-icon.ico' />
      </Head>
      <h1 className='md:my-20 mx-5 md:mx-32 text-center md:text-left text-3xl text-primary mb-16'>
        {brand?.name}
      </h1>
      <div className='flex flex-col md:grid md:grid-cols-4 gap-4 md:mx-32 mx-5'>
        {brandCars?.map((car, index) => (
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

export default brands;
