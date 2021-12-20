import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Loading = ({ className }) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    loading && (
      <div className={className}>
        <Image
          src='/loader.svg'
          width='200'
          height='200'
          alt='Loader image that spins'
        />
      </div>
    )
  );
};
export default Loading;
