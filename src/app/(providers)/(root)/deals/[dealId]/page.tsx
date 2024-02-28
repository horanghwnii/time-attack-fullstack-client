import api from '@/api/index.api';
import Page from '@/components/Page';
import Image from 'next/image';
import InterestButton from './_components/InterestButton';

async function DealPage(props: { params: { dealId: number } }) {
  const dealId = props.params.dealId;
  const deal = await api.deals.getDeal(dealId);

  return (
    <Page>
      <div className='w-[550px] mt-7'>
        <div className='aspect-[3/3] relative mb-4 rounded-md overflow-hidden border-slate-400'>
          <Image
            alt={deal.name}
            src={deal.imgSrc}
            fill
            className='object-cover group-hover:scale-105 transition-transform'
            unoptimized
          />
        </div>

        <div className='flex items-center mb-4 pb-4 border-b'>
          <div className='w-14 h-14 rounded-full bg-green-300 mr-3'></div>
          <span className='tracking-wider'>{deal.user.email}</span>
        </div>

        <div className='flex flex-col gap-4'>
          <h4 className='text-lg'>{deal.name}</h4>
          <div>
            <span className='font-bold'>{deal.price.toLocaleString()}원</span>
          </div>
          <div className='overflow-hidden overflow-ellipsis whitespace-nowrap'>
            {deal.description}
          </div>
        </div>
        <div className='flex justify-end mt-5 pb-5 border-b'>
          <InterestButton deal={deal} email={deal.user.email} />
        </div>
      </div>
    </Page>
  );
}

export default DealPage;
