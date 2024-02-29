'use client';

import { client } from '@/api/index.api';
import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import Page from '@/components/Page';
import { useRouter } from 'next/navigation';
import { useId, useState } from 'react';

function CreateDealPage() {
  const id = useId();
  const router = useRouter();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');

  const [image, setImage] = useState<File | null>(null);

  const formData = new FormData();

  const handleClickCreate = async () => {
    if (!image) return alert('이미지를 선택해주세요.');
    formData.append('image', image);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('price', price);

    await client.post<Response>('/deals/create', formData);
    router.push('/');
  };

  return (
    <Page>
      <Heading label='판매글 등록하기' />

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

        <label htmlFor={id}>이미지</label>
        <Input
          label=''
          id={id}
          type='file'
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className='border px-2 py-1 text-lg w-full col-span-3 rounded'
        />

        <label htmlFor={id}>주소</label>
        <Input
          label=''
          id={id}
          type='text'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className='border px-2 py-1 text-lg w-full col-span-3 rounded'
        />

        <label htmlFor={id}>판매가격</label>
        <Input
          label=''
          id={id}
          type='number'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className='border px-2 py-1 text-lg w-full col-span-3 rounded'
        />

        <div className='col-span-4'>
          <Button label='판매글 올리기' onClick={handleClickCreate} />
        </div>
      </div>
    </Page>
  );
}

export default CreateDealPage;
