import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React from 'react';

const FAQ = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Fast Track | {t(`common:faq`)} </title>
        <link rel='icon' href='/new-logo-icon.ico' />
      </Head>
      <div className='flex flex-col'>
        <span className='w-full p-[0.5px] bg-primary opacity-10'></span>
        <div className='mx-5 md:mx-32 mt-20'>
          <h1 className='text-center md:text-left text-5xl text-primary mb-16'>
            {t(`common:faq`)}
          </h1>
          <div className='text-text leading-8 tracking-wide'>
            <div className='mt-5'>
              <p>
                <strong>1. {t(`common:faq_1`)}: </strong>
              </p>
              <p>{t(`common:faq_1_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>2. {t(`common:faq_4`)}: </strong>
              </p>
              <p>{t(`common:faq_4_desc_1`)}</p>
              <p>{t(`common:faq_4_desc_2`)}</p>
              <p>{t(`common:faq_4_desc_3`)}</p>
              <p>{t(`common:faq_4_desc_4`)}</p>
              <p>{t(`common:faq_4_desc_5`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>3. {t(`common:faq_5`)}: </strong>
              </p>
              <p>{t(`common:faq_5_desc_1`)}</p>
              <p>{t(`common:faq_5_desc_2`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>4. {t(`common:faq_6`)}: </strong>
              </p>
              <p>{t(`common:faq_6_desc_1`)}</p>
              <p>{t(`common:faq_6_desc_2`)}</p>
              <p>{t(`common:faq_6_desc_3`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>5. {t(`common:faq_7`)}: </strong>
              </p>
              <p>{t(`common:faq_7_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>6. {t(`common:faq_9`)}: </strong>
              </p>
              <p>{t(`common:faq_9_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>7. {t(`common:faq_10`)}: </strong>
              </p>
              <p>{t(`common:faq_10_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>8. {t(`common:faq_11`)}: </strong>
              </p>
              <p>{t(`common:faq_11_desc_1`)}</p>
              <p>{t(`common:faq_11_desc_2`)}</p>
              <p>{t(`common:faq_11_desc_3`)}</p>
              <p>{t(`common:faq_11_desc_4`)}</p>
              <p>{t(`common:faq_11_desc_5`)}</p>
              <p>{t(`common:faq_11_desc_6`)}</p>
              <p>{t(`common:faq_11_desc_7`)}</p>
              <p>{t(`common:faq_11_desc_8`)}</p>
              <p>{t(`common:faq_11_desc_9`)}</p>
              <p>{t(`common:faq_11_desc_10`)}</p>
              <p>{t(`common:faq_11_desc_11`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>9. {t(`common:faq_12`)}: </strong>
              </p>
              <p>{t(`common:faq_12_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>10. {t(`common:faq_13`)}: </strong>
              </p>
              <p>{t(`common:faq_13_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>11. {t(`common:faq_14`)}: </strong>
              </p>
              <p>{t(`common:faq_14_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>12. {t(`common:faq_15`)}: </strong>
              </p>
              <p>{t(`common:faq_15_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>13. {t(`common:faq_16`)}: </strong>
              </p>
              <p>{t(`common:faq_16_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>14. {t(`common:faq_17`)}: </strong>
              </p>
              <p>{t(`common:faq_17_desc_1`)}</p>
              <p>{t(`common:faq_17_desc_2`)}</p>
              <p>{t(`common:faq_17_desc_3`)}</p>
              <p>{t(`common:faq_17_desc_4`)}</p>
              <p>{t(`common:faq_17_desc_5`)}</p>
              <p>{t(`common:faq_17_desc_6`)}</p>
              <p>{t(`common:faq_17_desc_7`)}</p>
              <p>{t(`common:faq_17_desc_8`)}</p>
              <p>{t(`common:faq_17_desc_9`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>15. {t(`common:faq_18`)}: </strong>
              </p>
              <p>{t(`common:faq_18_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>16. {t(`common:faq_19`)}: </strong>
              </p>
              <p>{t(`common:faq_19_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>17. {t(`common:faq_20`)}: </strong>
              </p>
              <p>{t(`common:faq_20_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>18. {t(`common:faq_21`)}: </strong>
              </p>
              <p>{t(`common:faq_21_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>19. {t(`common:faq_22`)}: </strong>
              </p>
              <p>{t(`common:faq_22_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>20. {t(`common:faq_23`)}: </strong>
              </p>
              <p>{t(`common:faq_23_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>21. {t(`common:faq_25`)}: </strong>
              </p>
              <p>{t(`common:faq_25_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>22. {t(`common:faq_26`)}: </strong>
              </p>
              <p>{t(`common:faq_26_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>23. {t(`common:faq_27`)}: </strong>
              </p>
              <p>{t(`common:faq_27_desc`)}</p>
            </div>
            <div className='mt-5'>
              <p>
                <strong>24. {t(`common:faq_28`)}: </strong>
              </p>
              <p>{t(`common:faq_28_desc`)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
