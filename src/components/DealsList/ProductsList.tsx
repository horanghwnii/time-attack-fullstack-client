import { ComponentProps } from 'react';
import DealCard from '../DealCard';

interface DealsListProps {
  deals: Array<ComponentProps<typeof DealCard>['deal']>;
}

function DealsList({ deals }: DealsListProps) {
  return (
    <ul className='grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-10'>
      {deals.reverse().map((deal) => (
        <li key={deal.id}>
          <DealCard deal={deal} />
        </li>
      ))}
    </ul>
  );
}

export default DealsList;
