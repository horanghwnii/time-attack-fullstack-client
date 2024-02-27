import api from '@/api/index.api';
import Image from 'next/image';
import Link from 'next/link';

interface DealCardProps {
  deal: Awaited<ReturnType<typeof api.deals.getAllDeals>>[number];
}

function DealCard({ deal }: DealCardProps) {
  return (
    <Link href={`/deals/${deal.id}`}>
      <div className='aspect-[3/4] relative mb-4'>
        <Image
          alt={deal.name}
          src={deal.imgSrc}
          fill
          className='object-cover group-hover:scale-105 transition-transform'
          unoptimized
        />
      </div>

      <div>
        <h4 className='text-lg font-bold'>{deal.name}</h4>
        <div className='overflow-hidden overflow-ellipsis whitespace-nowrap'>
          {deal.description}
        </div>
        <div>
          <span className='font-bold'>{deal.price.toLocaleString()}원</span>
        </div>
      </div>
    </Link>
  );
}

export default DealCard;
