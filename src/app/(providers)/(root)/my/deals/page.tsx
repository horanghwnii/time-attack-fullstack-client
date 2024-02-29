'use client';

import api from '@/api/index.api';
import DealCard from '@/components/DealCard';
import Heading from '@/components/Heading';
import Page from '@/components/Page';
import { useAuth } from '@/contexts/auth.context/auth.context';
import { useQuery } from '@tanstack/react-query';

function MyDealsPage() {
  const auth = useAuth();

  const { data: deals, isLoading } = useQuery({
    queryKey: ['deals', { isList: false }],
    queryFn: api.deals.getAllDeals,
    enabled: true,
  });

  if (!deals) return;

  let userDealsList = deals.filter((deal) => deal.user.email !== auth.email);

  return isLoading ? (
    <>로딩중입니다...</>
  ) : (
    <Page>
      <Heading label='내 판매글' />

      <ul className='grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-10'>
        {userDealsList.map((deal) => (
          <li key={deal.id}>
            <DealCard deal={deal} />
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default MyDealsPage;
