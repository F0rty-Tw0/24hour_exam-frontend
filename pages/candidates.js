import BaseLayout from 'layouts/BaseLayout';
import { getAllCandidates } from 'endpoints/candidates';
import Candidate from '@/Candidate';
const Candidates = ({ candidates }) => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='base-layout__candidates'
    >
      <div className='form__container'>
        <div className='form__wrapper'>
          <span className='form__title'>All Candidates</span>
          {candidates.map((candidate) => (
            <Candidate key={candidate.id} candidate={candidate} />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

const getStaticProps = async () => {
  const candidates = await getAllCandidates();
  return { props: { candidates }, revalidate: 60 };
};

export { getStaticProps };

export default Candidates;
