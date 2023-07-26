import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React, { useState } from 'react';

const ContactUs = () => {
  let { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    setLoading(true);

    const res = await fetch('/api/sendMail', {
      body: JSON.stringify({ email, name, subject, content }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const { error, message } = await res.json();
    if (error) {
      setLoading(false);
      setError(error);
    } else {
      setLoading(false);
      setSuccess(message);
    }
  };

  const changeName = (event) => {
    const name = event.target.value;
    setName(name);
  };
  const changeEmail = (event) => {
    const email = event.target.value;
    setEmail(email);
  };
  const changeSubject = (event) => {
    const subject = event.target.value;
    setSubject(subject);
  };
  const changeContent = (event) => {
    const content = event.target.value;
    setContent(content);
  };

  return (
    <>
      <Head>
        <title>Fast Track | {t('common:contact_us')}</title>
        <link rel='icon' href='/new-logo-icon.ico' />
      </Head>
      <div className='flex flex-col'>
        <span className='w-full p-[0.5px] bg-primary opacity-10'></span>
        <div className='mx-5 md:mx-32 mt-20'>
          <h1 className='text-center md:text-left text-5xl text-primary mb-16'>
            {t('common:contact_us')}
          </h1>
          <form onSubmit={sendEmail}>
            <p className='text-primary'>Name</p>
            <input
              className='bg-transparent text-xs lg:text-left text-center placeholder-gray-700 border-b-2 w-full text-white px-2 py-1 lg:mr-2 leading-tight focus:outline-none'
              type='text'
              placeholder='Enter your name'
              aria-label='Full name'
              onChange={changeName}
            />
            <p className='text-primary mt-10'>Email</p>
            <input
              className='bg-transparent text-xs lg:text-left text-center placeholder-gray-700 border-b-2 w-full text-white px-2 py-1 lg:mr-2 leading-tight focus:outline-none'
              type='email'
              placeholder='Enter your email'
              aria-label='Full name'
              onChange={changeEmail}
            />
            <p className='text-primary mt-10'>Subject</p>
            <input
              className='bg-transparent text-xs lg:text-left text-center placeholder-gray-700 border-b-2 w-full text-white px-2 py-1 lg:mr-2 leading-tight focus:outline-none'
              type='text'
              placeholder='Enter your email'
              aria-label='Full name'
              onChange={changeSubject}
            />
            <p className='text-primary mt-10'>Message</p>
            <textarea
              className='bg-transparent text-xs lg:text-left text-center placeholder-gray-700 border-b-2 w-full text-white px-2 py-1 lg:mr-2 leading-tight focus:outline-none'
              placeholder='Enter your email'
              aria-label='Full name'
              onChange={changeContent}
            />
            <button
              className='p-4 rounded-lg lg:self-center border-2 border-text text-primary 
          hover:bg-primary hover:text-background transition duration-300 ease-in-out mt-10'
              type='submit'
            >
              Send Email
            </button>
          </form>
          {loading && <p className='text-sm font-bold text-primary'>loading</p>}
          {success ? (
            <p className='text-sm font-bold text-green-700'>{success}</p>
          ) : (
            <p className='text-sm font-bold text-red-800'>{error}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
