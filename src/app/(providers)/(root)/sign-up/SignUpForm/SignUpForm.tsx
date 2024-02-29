'use client';

import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import { useAuth } from '@/contexts/auth.context/auth.context';
import useMutationSignUp from '@/react-query/auth/useMutationSignUp';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

function SignUpForm() {
  const auth = useAuth();
  const router = useRouter();
  const { mutateAsync: signUp, isPending } = useMutationSignUp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleClickSignUp = async () => {
    if (!email.trim()) return alert('이메일을 입력해주세요.');
    if (!password.trim()) return alert('비밀번호를 입력해주세요.');
    if (!passwordConfirm.trim()) return alert('비밀번호 확인을 입력해주세요.');
    if (password.length < 8) return alert('비밀번호는 8자 이상이어야 합니다.');
    if (password.trim() !== passwordConfirm.trim())
      return alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');

    try {
      await signUp({ email, password });
      auth.setIsLoggedIn(true);
      auth.setEmail(email);
    } catch (e) {
      alert('회원가입에 실패하였습니다.');
    }
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
      router.push('/');
    }
  }, [auth.isLoggedIn, router]);

  return (
    <div className='max-w-96 w-full mx-auto'>
      <Heading label='회원가입' />

      <Input
        label=''
        type='email'
        value={email}
        placeholder='이메일'
        className='border-b px-2 py-2 focus:border-b-2 outline-none'
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label=''
        type='password'
        value={password}
        placeholder='비밀번호'
        className='border-b px-2 py-2 focus:border-b-2 outline-none'
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        label=''
        type='password'
        value={passwordConfirm}
        placeholder='비밀번호 확인'
        className='border-b px-2 py-2 focus:border-b-2 outline-none'
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button label='회원가입하기' onClick={handleClickSignUp} />
    </div>
  );
}

export default SignUpForm;
