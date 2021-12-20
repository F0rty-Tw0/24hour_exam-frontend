import { makeRequest } from 'services/fetchApi';

const getAllParties = () => {
  return makeRequest('GET', null, 'parties');
};
export { getAllParties };
