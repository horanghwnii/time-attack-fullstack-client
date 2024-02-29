import axios from 'axios';
import authAPI from './auth.api/auth.api';
import dealsAPI from './deals.api/deals.api';
import interestAPI from './interest.api/interest.api';

// const accessToken =
//   typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;

// headers: {
//     Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
//   },

export const client = axios.create({
  baseURL: 'http://localhost:5050',
});

const api = {
  auth: authAPI,
  deals: dealsAPI,
  interest: interestAPI,
};

export default api;
