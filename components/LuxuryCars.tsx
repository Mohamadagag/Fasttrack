import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';
import cars from '../data/luxuryCars.js';
import useTranslation from 'next-translate/useTranslation';

const LuxuryCars = () => {
  const [shuffledCars, setShuffledCars] = useState([]);

  let { t } = useTranslation();

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  useEffect(() => {
    setShuffledCars(shuffle(cars));
  }, []);

  return (
    <>
      <h1 className='mx-5 md:mx-32 text-center md:text-left text-3xl text-primary mb-16'>
        {t('common:luxury_cars')}
      </h1>
      <div className='flex flex-col md:grid md:grid-cols-4 gap-4 md:mx-32 mx-5'>
        {shuffledCars.slice(0, 8).map((car, index) => (
          <CarCard
            key={index}
            id={car.id}
            img={car.urls[0]}
            name={car.name}
            img_alt={car.name}
          />
        ))}
      </div>
    </>
  );
};

export default LuxuryCars;
