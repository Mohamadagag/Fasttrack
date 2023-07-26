import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Menu = () => {
  let { t } = useTranslation();

  let router = useRouter();

  const pages = [
    {
      name: `${t('common:home')}`,
      url: '/',
    },
    {
      name: `${t('common:rent_a_car')}`,
      url: '/luxury-cars',
    },
    {
      name: `${t('common:all_brands')}`,
      url: '/collections',
    },
    {
      name: `${t('common:about_us')}`,
      url: '/about-us',
    },
    {
      name: `${t('common:contact_us')}`,
      url: '/contact-us',
    },
  ];

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <>
      <nav className='flex relative items-center flex-wrap lg:mx-52 my-6'>
        <Link href='/' onClick={closeMenu} className='mx-auto lg:mr-5'>
          <img src='/new-logo.png' alt='Fastrack Logo' className='w-28' />
        </Link>
        <button
          id='burger'
          className='absolute top-0 right-0 p-3 rounded lg:hidden text-primary outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? 'shadow-xl py-4' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto w-full lg:items-center items-center flex flex-col lg:h-auto'>
            {pages.map((page) => {
              return (
                <div
                  key={page.url}
                  className='text-primary cursor-pointer lg:inline-flex lg:w-auto self-center text-sm px-3 py-2 rounded'
                >
                  <Link href={page.url} onClick={closeMenu}>
                    {page.name}
                  </Link>
                </div>
              );
            })}
            <div className='flex gap-4 lg:ml-auto'>
              {router.locales.map((locale) => (
                <Link key={locale} href={router.asPath} locale={locale}>
                  {locale === 'en-US' ? (
                    <img
                      className='w-7 h-7'
                      src='/flags/britain.png'
                      alt='eng'
                    />
                  ) : locale === 'fr' ? (
                    <img className='w-7 h-7' src='/flags/france.png' alt='fr' />
                  ) : (
                    locale
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
