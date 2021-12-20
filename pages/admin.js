import Image from 'next/image';
import Router from 'next/router';
import { useState, useCallback } from 'react';
import BaseLayout from 'layouts/BaseLayout';
import { getAllParties } from 'endpoints/parties';
import { createCandidate } from 'endpoints/candidates';

const Admin = ({ parties }) => {
  const [formData, setFormData] = useState({
    name: '',
    party: { id: '' },
  });
  const registerCandidate = useCallback(
    async (event) => {
      event.preventDefault();
      createCandidate(formData);
      Router.reload();
    },
    [formData]
  );

  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='base-layout__admin'
    >
      <div className='form__container'>
        <div className='form__wrapper'>
          <span className='form__title'>Welcome</span>
          <div className='form__icon'>
            <Image
              width='48'
              height='48'
              src='/favicon.ico'
              alt='Easy Vote logo'
            />
          </div>
          <form>
            <div className='input__wrapper'>
              <input
                className={`input ${
                  formData.name.length > 0 ? 'input--filled' : ''
                }`}
                type='text'
                name='name'
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />
              <span
                className='input--focus'
                placeholder='Candidate Name'
              ></span>
            </div>

            <div className='input__wrapper'>
              <select
                name='party'
                className={`input ${
                  formData.party.length > 0 ? 'input--filled' : ''
                }`}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    party: { id: event.target.value },
                  })
                }
              >
                <option value=''></option>
                {parties?.map((party) => (
                  <option key={party.id} value={party.id}>
                    {party.name}
                  </option>
                ))}
              </select>
              <span className='input--focus' placeholder='Party'></span>
            </div>

            <div className='button__wrapper'>
              <button
                type='submit'
                className='button'
                onClick={registerCandidate}
              >
                Create Candidate
              </button>
              <div className='button__background'></div>
            </div>
            <div className='form__footer'>
              <span>This connection is encrypted</span>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
};
const getStaticProps = async () => {
  const parties = await getAllParties();
  return { props: { parties }, revalidate: 60 };
};

export { getStaticProps };
export default Admin;
