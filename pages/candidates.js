import BaseLayout from 'layouts/BaseLayout';
import { getAllCandidates } from 'endpoints/candidates';

const Candidates = ({ candidates }) => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='base-layout__candidates'
    >
      {candidates.map((candidate) => (
        <div key={candidate.id}>{candidate.name}</div>
      ))}
    </BaseLayout>
  );
};

const getStaticProps = async () => {
  const candidates = await getAllCandidates();
  return { props: { candidates }, revalidate: 60 };
};

export { getStaticProps };

export default Candidates;
