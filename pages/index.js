import BaseLayout from 'layouts/BaseLayout';

const Home = () => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='base-layout__home'
    >
      If we decide to have a login page, this would be it. For the simplicity it
      is turned off
    </BaseLayout>
  );
};

export default Home;
