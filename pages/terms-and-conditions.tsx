import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import React from 'react';

const TermsAndConditions = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>Fast Track | {t(`common:terms_and_conditions`)}</title>
        <link rel='icon' href='/new-logo-icon.ico' />
      </Head>
      <div className='flex flex-col'>
        <span className='w-full p-[0.5px] bg-primary opacity-10'></span>
        <div className='mx-5 md:mx-32 mt-20'>
          <h1 className='text-center md:text-left text-5xl text-primary mb-16'>
            {t(`common:terms_and_conditions`)}
          </h1>
          <div className='text-text leading-8 tracking-wide'>
            <p>
              <strong>1. {t(`common:delivery_and_collection`)}: </strong>
              {t(`common:delivery_and_collection_desc`)}
            </p>
            <p>
              <strong>2. {t(`common:security`)}: </strong>
              {t(`common:security_desc`)}
            </p>
            <p>
              <strong>3. {t(`common:insurance`)}: </strong>
              {t(`common:insurance_desc`)}
            </p>
            <p>
              <strong>4. {t(`common:driving_liscences`)}: </strong>
              {t(`common:driving_liscences_desc`)}
            </p>
            <p>
              <strong>5. {t(`common:credit_cards`)}: </strong>
              {t(`common:credit_cards_desc`)}
            </p>
            <p>
              <strong>6. {t(`common:age_restrictions`)}: </strong>
              {t(`common:age_restrictions_desc`)}
            </p>
            <p>
              <strong>7. {t(`common:theft_protection`)}: </strong>
              {t(`common:theft_protection_desc`)}
            </p>
            <p>
              <strong>8. {t(`common:toll_tax`)}: </strong>
              {t(`common:toll_tax_desc`)}
            </p>
            <p>
              <strong>9. {t(`common:parking_fee`)}: </strong>
              {t(`common:parking_fee_desc`)}
            </p>
            <p>
              <strong>10. {t(`common:fines`)}: </strong>
              {t(`common:fines_desc`)}
            </p>
            <p>
              <strong>11. {t(`common:vehicle_prohibition`)}: </strong>
              {t(`common:vehicle_prohibition_desc`)}
            </p>
            <p>
              <strong>12. {t(`common:vehicle_impound`)}: </strong>
              {t(`common:vehicle_impound_desc`)}
            </p>
            <p>
              <strong>13. {t(`common:mileage_restriction`)}: </strong>
              {t(`common:mileage_restriction_desc`)}
            </p>
            <p>
              <strong>14. {t(`common:non_coverage`)}: </strong>
              {t(`common:non_coverage_desc`)}
            </p>
            <p>
              <strong>15. {t(`common:driving_restrictions`)}: </strong>
              {t(`common:driving_restrictions_desc`)}
            </p>
            <p>
              <strong>16. {t(`common:petrol`)}: </strong>
              {t(`common:petrol_desc`)}
            </p>
            <p>
              <strong>17. {t(`common:rental_period`)}: </strong>
              {t(`common:rental_period_desc`)}
            </p>
            <p>
              <strong>18. {t(`common:additional_driver`)}: </strong>
              {t(`common:additional_driver_desc`)}
            </p>
            <p>
              <strong>19. {t(`common:cancellation`)}: </strong>
              {t(`common:cancellation_desc`)}
            </p>
            <p>
              <strong>20. {t(`common:other_conditions`)}: </strong>
              {t(`common:other_conditions_desc`)}
            </p>
            <p>
              <strong>21. {t(`common:working_hours`)}: </strong>
              {t(`common:working_hours_desc`)}
            </p>
            <p>
              <strong>22. {t(`common:smoking`)}: </strong>
              {t(`common:smoking_desc`)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
