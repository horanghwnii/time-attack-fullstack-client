'use client';

import { useAuth } from '@/contexts/auth.context/auth.context';
import { useModal } from '@/contexts/modal.context/modal.context';
import Link from 'next/link';
import LogInModal from '../LogInModal';

function HeaderMenu() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const modal = useModal();

  const handleClickLogInButton = () => {
    modal.open(<LogInModal />);
  };

  return (
    <div className='ml-auto flex gap-5'>
      {isLoggedIn ? (
        <>
          <button onClick={() => setIsLoggedIn(false)}>로그아웃</button>
        </>
      ) : (
        <>
          <Link href='/sign-up'>회원가입</Link>
          <button onClick={handleClickLogInButton}>로그인</button>
        </>
      )}
    </div>
  );
}

export default HeaderMenu;
