import { makeRequest } from 'services/fetchApi';

const getElectionsByDate = (date) => {
  return makeRequest('GET', null, `elections/date/${date}`);
};
export { getElectionsByDate };
