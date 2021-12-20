import Head from 'next/head';
import Header from 'components/shared/Header';
import Loading from 'components/shared/Loading';

const BaseLayout = ({ className, title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='base-layout'>
        <section className={`container section ${className}`}>
          {children}
        </section>
      </main>
      <Loading className='base-layout__loading' />
    </>
  );
};
export default BaseLayout;
