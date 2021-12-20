import { useRouter } from 'next/router';
import BaseLayout from 'layouts/BaseLayout';
import { getAllParties } from 'endpoints/parties';
import { getCandidatesByPartyId } from 'endpoints/candidates';
import { incrementVoteCount } from 'endpoints/elections';

const Party = ({ candidates }) => {
  const router = useRouter();
  const handleVote = async (id) => {
    try {
      await incrementVoteCount(id);
    } catch (err) {
      console.log(err);
    }
    router.push('/elections');
  };
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='base-layout__candidates'
    >
      <div className='form__container'>
        <div className='form__wrapper'>
          <span className='form__title'>{candidates[0].party.name}</span>
          {candidates.map((candidate) => (
            <div
              key={candidate.id}
              className='parties__profile candidates'
              onClick={() => handleVote(candidate.id)}
            >
              {candidate.name} <span className='parties__value'>Vote</span>
            </div>
          ))}
        </div>
      </div>
    </BaseLayout>
  );
};

const getStaticPaths = async () => {
  const parties = await getAllParties();
  const paths = parties.map((party) => ({
    params: { id: party.id.toString() },
  }));
  return { paths, fallback: 'blocking' };
};

export async function getStaticProps({ params: { id } }) {
  const candidates = await getCandidatesByPartyId(id);
  return {
    props: { candidates },
    revalidate: 60,
  };
}

export { getStaticPaths };

export default Party;
