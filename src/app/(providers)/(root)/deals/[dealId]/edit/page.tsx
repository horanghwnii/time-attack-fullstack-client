'use client';

import api from '@/api/index.api';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import Page from '@/components/Page';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useId, useState } from 'react';

function DealEditPage(props: { params: { dealId: number } }) {
  const id = useId();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const dealId = props.params.dealId;
  const { data: deal } = useQuery({
    queryKey: ['deal', { isList: false, id: dealId }],
    queryFn: () => api.deals.getDeal(dealId),
  });

  useEffect(() => {
    if (!deal) return;

    setName(deal.name);
    setDescription(deal.description);
    setPrice(deal.price);
  }, [deal]);

  const handleCickEditButton = () => {
    // api.deals.updateDeal(dealId, { name, description, price });
  };

  return (
    <Page>
      <Heading label='판매글 수정하기' />

      <div>
        <label htmlFor={id}>글 제목</label>
        <Input
          label=''
          id={id}
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border px-2 py-1 text-lg w-full col-span-3 rounded'
        />

        <label htmlFor={id}>글 내용</label>
        <textarea
          id={id}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={10}
          className='border px-2 py-1 text-lg w-full col-span-3 rounded'
        ></textarea>

        <label htmlFor={id}>판매가격</label>
        <Input
          label=''
          id={id}
          type='number'
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className='border px-2 py-1 text-lg w-full col-span-3 rounded'
        />
        <div className='col-span-4'>
          <Button label='판매글 수정하기' />
        </div>
      </div>
    </Page>
  );
}

export default DealEditPage;
