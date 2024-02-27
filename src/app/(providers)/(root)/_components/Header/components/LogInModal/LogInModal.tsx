import Button from '@/components/Button';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import Modal from '@/components/Modal';
import { useAuth } from '@/contexts/auth.context/auth.context';
import { useModal } from '@/contexts/modal.context/modal.context';
import useMutationLogIn from '@/react-query/auth/useMutationLogIn';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function LogInModal() {
  const auth = useAuth();
  const modal = useModal();
  const router = useRouter();
  const { mutateAsync: logIn, isPending } = useMutationLogIn();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClickLogIn = async () => {
    if (!email.trim()) return alert('이메일을 입력해주세요.');
    if (!password.trim()) return alert('비밀번호를 입력해주세요.');

    try {
      await logIn({ email, password });
      auth.setIsLoggedIn(true);
      auth.setEmail(email);
      router.push('/');
      modal.close();
    } catch (e) {
      alert('로그인에 실패하였습니다.');
    }
  };

  return (
    <Modal>
      <Heading label='로그인' />

      <Input
        label='이메일'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label='비밀번호'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button label='로그인하기' onClick={handleClickLogIn} />
    </Modal>
  );
}

export default LogInModal;
