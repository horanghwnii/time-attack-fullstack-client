import axios from 'axios';
import authAPI from './auth.api/auth.api';
import dealsAPI from './deals.api/deals.api';

export const client = axios.create({
  baseURL: 'http://localhost:5050',
});

const api = {
  auth: authAPI,
  deals: dealsAPI,
};

export default api;
