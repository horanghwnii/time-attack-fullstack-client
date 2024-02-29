import { Response } from '@/types/Response.type';
import { client } from '../index.api';

async function addInterestDeal(dealId: number) {
  const response = await client.post<Response<boolean>>(
    `/deals/${dealId}/likes`
  );
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const interestedDeal = data.result;

  return interestedDeal;
}

async function getInterestedDeals() {
  const response = await client.get('/likes');
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const interestedDeals = data.result;

  return interestedDeals;
}
const interestAPI = {
  addInterestDeal,
  getInterestedDeals,
};

export default interestAPI;
