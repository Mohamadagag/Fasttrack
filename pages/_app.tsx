import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='description' content='Rent a Luxury Car in France' />
        <meta name='keywords' content='luxury, rent a car, cars' />
      </Head>
      <div className='bg-background'>
        <a
          href={'https://wa.me/33749953884'}
          target='_blank'
          title='Contact Sales'
          className='fixed z-50 border border-primary bottom-10 right-8 w-10 md:w-20 h-10 md:h-20 rounded-full drop-shadow-lg flex justify-center items-center text-4xl  hover:drop-shadow-2xl'
        >
          <img
            className='hover:animate-pulse-fast duration-75 w-6 md:w-12'
            src='/whatsapp_logo.png'
            alt='whatsapp'
          />
        </a>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
