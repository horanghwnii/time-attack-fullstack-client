import { Response } from '@/types/Response.type';
import { client } from '../index.api';
import { GetDealData, GetDealsData } from './deals.data';
import { UpdateDealDto } from './deals.dto';

async function getAllDeals() {
  const result = await client.get<Response<GetDealsData>>('/');
  const data = result.data;
  if (!data.success) throw new Error(data.error.message);

  const deals = data.result;

  return deals;
}

async function getDeal(dealId: number) {
  const response = await client.get<Response<GetDealData>>(`/deals/${dealId}`);
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);

  const deal = data.result;

  return deal;
}

async function getUserDealsList() {
  const result = await client.get('/my/deals');
  const data = result.data;

  if (!data.success) throw new Error(data.error.message);

  const deals = data.result;

  return deals;
}

async function updateDeal(dealId: number, dto: UpdateDealDto) {
  const result = await client.put<Response<UpdateDealDto>>(
    `/deals/${dealId}/edit`,
    dto
  );
  const data = result.data;

  if (!data.success) throw new Error(data.error.message);

  const deal = data.result;

  return deal;
}

async function deleteDeal(dealId: number) {
  const response = await client.delete(`/deals/${dealId}`);
  const data = response.data;

  if (!data.success) throw new Error(data.error.message);

  const deal = data.result;

  return deal;
}

const dealsAPI = {
  getAllDeals,
  getDeal,
  getUserDealsList,
  updateDeal,
  deleteDeal,
};

export default dealsAPI;
