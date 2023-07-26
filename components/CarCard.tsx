import Link from 'next/link';
import React from 'react';

const CarCard = ({ id, img, img_alt, name }) => {
  return (
    <Link
      href={`/luxury-cars/${id}`}
      className='flex flex-col hover:scale-105 transition duration-500'
    >
      <img src={img} alt={img_alt} className='h-72' />
      <div className='py-5 px-2 bg-primary bg-opacity-10 text-primary'>
        <h1 className='text-left font-light'>{name}</h1>
      </div>
    </Link>
  );
};

export default CarCard;
