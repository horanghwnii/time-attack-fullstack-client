import { Response } from '@/types/Response.type';
import { client } from '../index.api';
import { GetDealData, GetDealsData } from './deals.data';

async function getAllDeals() {
  const result = await client.get<Response<GetDealsData>>('/');
  const data = result.data;
  if (!data.success) throw new Error(data.error.message);

  const deals = data.result;

  return deals;
}

async function getDeal(dealId: number) {
  const result = await client.get<Response<GetDealData>>(`/deals/${dealId}`);
  const data = result.data;
  if (!data.success) throw new Error(data.error.message);

  const products = data.result;

  return products;
}

const dealsAPI = { getAllDeals, getDeal };

export default dealsAPI;
