import { makeRequest } from 'services/fetchApi';

const getAllCandidates = () => {
  return makeRequest('GET', null, 'candidates');
};

const createCandidate = (candidate) => {
  return makeRequest('POST', candidate, 'candidates');
};
export { getAllCandidates, createCandidate };
