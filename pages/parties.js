import { MdHowToVote } from 'react-icons/md';
import BaseLayout from 'layouts/BaseLayout';
import { getAllParties } from 'endpoints/parties';
import { getElectionsByDate } from 'endpoints/elections';

const Parties = ({ parties }) => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='sections__parties'
    >
      <div className='page'>
        <div className='page__wrapper'>
          <section className='parties__section'>
            <div className='parties__header'>
              <div className='parties__icon'>
                <MdHowToVote />
              </div>
              <h1 className='parties__title'>
                <span className='parties__title--top'>PARTIES</span>
                <span className='parties__title--bottom'>Leaderboard</span>
              </h1>
            </div>
            <div className='parties__profiles'>
              {parties?.map((candidates, index) => {
                let partyAbr = candidates[1].candidate.party.abbreviation;
                let partyName = candidates[1].candidate.party.name;
                let partyVotes = candidates[0].votes;
                return (
                  <div className='parties__profile' key={index}>
                    <div className='parties__picture'>{partyAbr}</div>
                    <div className='parties__name'>
                      <p>{partyName}</p>
                      {/* <p className='parties__vote'>VOTE</p> */}
                    </div>
                    <span className='parties__value'>{partyVotes}</span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </BaseLayout>
  );
};

const getStaticProps = async () => {
  const allParties = await getAllParties();
  const elections = await getElectionsByDate('2021-01-01');
  let parties = [];
  allParties.map((party) => {
    parties.push(
      elections.filter((election) => election.candidate.party.id === party.id)
    );
  });
  parties.map((candidates) => {
    let partyVotes = 0;
    candidates.map((candidate) => (partyVotes += candidate.votes));
    candidates.unshift({ votes: partyVotes });
  });
  parties.sort((a, b) => b[0].votes - a[0].votes);
  return { props: { parties }, revalidate: 60 };
};

export { getStaticProps };
export default Parties;
