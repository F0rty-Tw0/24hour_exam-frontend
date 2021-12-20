import { makeRequest } from 'services/fetchApi';

const getAllCandidates = () => {
  return makeRequest('GET', null, 'candidates');
};

const getCandidatesByPartyId = (id) => {
  return makeRequest('GET', null, `candidates/party/${id}`);
};

const createCandidate = (candidate) => {
  return makeRequest('POST', candidate, 'candidates');
};

const deleteCandidate = (id) => {
  return makeRequest('DELETE', null, `candidates/${id}`);
};

const updateCandidate = (candidate, id) => {
  return makeRequest('PUT', candidate, `candidates/${id}`);
};

export {
  getAllCandidates,
  getCandidatesByPartyId,
  createCandidate,
  deleteCandidate,
  updateCandidate,
};
