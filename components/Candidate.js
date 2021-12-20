import Router from 'next/router';
import { useState } from 'react';
import { ImBin } from 'react-icons/im';
import { AiOutlineEdit, AiFillSave } from 'react-icons/ai';
import { deleteCandidate, updateCandidate } from 'endpoints/candidates';

const Candidate = ({ candidate, parties }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: candidate.name,
    party: candidate.party,
  });

  const handleDelete = async () => {
    try {
      await deleteCandidate(candidate.id);
    } catch (err) {
      console.log(err);
    }
    Router.reload();
  };

  const handleSave = async () => {
    try {
      await updateCandidate(formData, candidate.id);
    } catch (err) {
      console.log(err);
    }
    Router.reload();
  };

  return (
    <div className='parties__profile candidates' key={candidate.id}>
      {!isEditing ? (
        candidate.name
      ) : (
        <input
          type='text'
          name='name'
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
        />
      )}
      {!isEditing ? (
        <AiOutlineEdit
          className='edit'
          onClick={() => setIsEditing(!isEditing)}
        />
      ) : (
        <AiFillSave className='save' onClick={handleSave} />
      )}
      <ImBin className='remove' onClick={handleDelete} />
    </div>
  );
};
const getStaticProps = async () => {
  const parties = await getAllParties();
  return { props: { parties }, revalidate: 60 };
};

export { getStaticProps };
export default Candidate;
