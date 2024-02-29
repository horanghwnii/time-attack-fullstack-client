'use client';

import api from '@/api/index.api';
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

  const handleClickLogOutButton = () => {
    api.auth.logOut();
    setIsLoggedIn(false);
  };

  return (
    <div className='ml-auto flex gap-5'>
      {isLoggedIn ? (
        <>
          <button onClick={handleClickLogOutButton} className='text-nowrap'>
            로그아웃
          </button>
        </>
      ) : (
        <>
          <Link href='/sign-up' className='text-nowrap'>
            회원가입
          </Link>
          <button onClick={handleClickLogInButton} className='text-nowrap'>
            로그인
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderMenu;
