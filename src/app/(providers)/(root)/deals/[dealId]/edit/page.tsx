'use client';

import api, { client } from '@/api/index.api';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import Page from '@/components/Page';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useEffect, useId, useState } from 'react';

function DealEditPage(props: { params: { dealId: number } }) {
  const id = useId();
  const router = useRouter();

  const dealId = props.params.dealId;
  const { data: deal } = useQuery({
    queryKey: ['deal', { isList: false, id: dealId }],
    queryFn: () => api.deals.getDeal(dealId),
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');

  const [image, setImage] = useState<File | null>(null);

  const formData = new FormData();

  useEffect(() => {
    if (!deal) return;

    setName(deal.name);
    setDescription(deal.description);
    setPrice(String(deal.price));
    setAddress(deal.address);
  }, [deal]);

  const handleClickUpdate = async () => {
    if (!image) return alert('이미지를 선택해주세요.');
    formData.append('image', image);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('price', price);

    await client.post<Response>(`/deals/${dealId}/edit`, formData);
    router.push('/');
  };

  return (
    <Page>
      <Heading label='판매글 수정하기' />

      <div>
        <Input
          label='글 제목'
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

        <Input
          label='이미지를 선택해주세요.'
          id={id}
          type='file'
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className='border px-2 py-1 text-lg w-full col-span-3 rounded'
        />

        <Input
          label='주소'
          id={id}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className='border px-2 py-1 text-lg w-full col-span-3 rounded'
        ></Input>

        <Input
          label='판매가격'
          id={id}
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='border px-2 py-1 text-lg w-full col-span-3 rounded'
        />
        <div className='col-span-4'>
          <Button label='판매글 수정하기' onClick={handleClickUpdate} />
        </div>
      </div>
    </Page>
  );
}

export default DealEditPage;
