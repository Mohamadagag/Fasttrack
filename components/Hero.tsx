import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className='w-full lg:relative'>
      <img src='/Luxury.jpg' className='w-full' />
      <h3 className='hidden lg:block absolute text-6xl font-bold text-white bottom-96 right-[25rem]'>
        {t(`common:hero_luxury`)}
      </h3>
      <div className='hidden lg:block absolute font-semibold flex-col text-white text-3xl bottom-32 right-[11rem] text-left leading-relaxed'>
        <p>{t(`common:hero_conquer`)}</p>
        <p>{t(`common:hero_elegance`)}</p>
        <p>{t(`common:hero_fleet`)}</p>
        <Link
          href={'/luxury-cars'}
          className='mt-10 font-bold px-8 border-primary text-center border-4 rounded-2xl'
        >
          {t(`common:hero_rent_here`)}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
