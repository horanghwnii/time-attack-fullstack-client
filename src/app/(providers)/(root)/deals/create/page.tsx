'use client';

import Page from '@/components/Page';
import axios from 'axios';
import { ChangeEventHandler } from 'react';

function CreateDealPage() {
  const handleChange: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return alert('선택해');

    const formData = new FormData();
    formData.append('blabla', file);

    const response = await axios.post(
      'http://localhost:5050/deals/image',
      formData
    );
    console.log(response);
  };

  // type이 file이면 value는 빼준다.

  return (
    <Page>
      <div>
        <div>이미지 업로드</div>
        <input type='file' onChange={handleChange} />
      </div>
    </Page>
  );
}

export default CreateDealPage;
