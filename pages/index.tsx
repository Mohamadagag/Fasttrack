import type { NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import Fleet from '../components/Fleet';
import Hero from '../components/Hero';
import LuxuryCars from '../components/LuxuryCars';
import RequiredDocs from '../components/RequiredDocs';
import Welcome from '../components/Welcome';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Fast Track | {t(`common:rent_lux_cars`)}</title>
        <link rel='icon' href='/new-logo-icon.ico' />
      </Head>
      <main>
        <div className='flex flex-col justify-center w-full text-center'>
          <Hero />
          <Welcome />
          <LuxuryCars />
          <Fleet />
          <RequiredDocs />
        </div>
      </main>
    </>
  );
};

export default Home;
