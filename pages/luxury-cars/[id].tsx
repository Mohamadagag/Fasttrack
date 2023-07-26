import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';
import cars from '../../data/luxuryCars.js';
import useTranslation from 'next-translate/useTranslation';

const CarDetails = () => {
  const { t, lang } = useTranslation();
  const { id } = useRouter().query;

  const car = cars.filter((car) => car.id === id)[0];

  return (
    <>
      <Head>
        <title>Fast Track | {car?.name}</title>
        <link rel='icon' href='/new-logo-icon.ico' />
      </Head>
      <div className='mx-5 md:mx-32 my-10 md:my-20 flex flex-col md:flex-row gap-10'>
        <div className='md:w-3/5'>
          <Carousel autoPlay interval={5000} infiniteLoop>
            {car?.urls?.map((image, index) => (
              <img key={index} src={image} alt={car?.id} />
            ))}
          </Carousel>
        </div>
        <div className='text-primary md:w-2/5'>
          <h1 className='font-medium text-4xl md:text-5xl'>{car?.name}</h1>
          <p className='mt-10 text-text leading-8 tracking-wide'>
            {lang === 'fr' ? car?.description_fr : car?.description_en}
          </p>
          <div className='mt-10 text-text underline'>
            <Link
              href={'/terms-and-conditions'}
              className='hover:text-primary transition duration-300'
            >
              {t(`common:terms_and_conditions_apply`)}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetails;
