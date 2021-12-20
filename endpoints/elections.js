import { makeRequest } from 'services/fetchApi';

const getElectionsByDate = (date) => {
  return makeRequest('GET', null, `elections/date/${date}`);
};

const incrementVoteCount = (id) => {
  return makeRequest('GET', null, `elections/increment/${id}`);
};

export { getElectionsByDate, incrementVoteCount };
