'use client';

import { useAuth } from '@/contexts/auth.context/auth.context';
import Link from 'next/link';
import HeaderMenu from './components/HeaderMenu';

function Header() {
  const auth = useAuth();

  return (
    <header className='bg-white sticky min-w-[605px] top-0 h-16 px-28 border-b flex z-20 items-center'>
      <Link href='/' className='text-lg font-bold text-nowrap drop-shadow-lg'>
        중고마켓
      </Link>

      <nav className='lg:mx-20 md:mx-10 mx-4'>
        <ul className='flex gap-5'>
          <li>
            <Link href='/' className='text-nowrap tracking-widest'>
              구입하기
            </Link>
          </li>
          {auth.isLoggedIn && (
            <>
              <li>
                <Link
                  href='/deals/create'
                  className='text-nowrap tracking-widest'
                >
                  판매하기
                </Link>
              </li>
              <li>
                <Link href='/my/deals' className='text-nowrap tracking-widest'>
                  내 판매글
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>

      <HeaderMenu />
    </header>
  );
}

export default Header;
