'use client';

import LogInModal from '@/app/(providers)/(root)/_components/Header/components/LogInModal';
import { useAuth } from '@/contexts/auth.context/auth.context';
import { useModal } from '@/contexts/modal.context/modal.context';
import { Deal } from '@/types/Deal.type';
import Link from 'next/link';

interface InterestButtonProps {
  deal: Deal;
  email: string;
}

function InterestButton({ deal, email }: InterestButtonProps) {
  const { isLoggedIn, email: profile } = useAuth();
  const modal = useModal();

  const handleClickInterestButton = () => {
    if (!isLoggedIn) return modal.open(<LogInModal />);
    alert('그래! 잘 눌렀다!');
  };

  return email === profile ? (
    <>
      <Link
        href={`/deals/${deal.id}/edit`}
        className='px-4 py-2 font-bold bg-green-400 hover:bg-green-500 transition-all text-white rounded'
      >
        수정하기
      </Link>
      <button className='px-4 py-2 font-bold bg-red-400 hover:bg-red-500 transition-all text-white rounded ml-1'>
        삭제하기
      </button>
    </>
  ) : (
    <>
      <button
        className='px-4 py-2 font-bold bg-blue-400 text-white rounded'
        onClick={handleClickInterestButton}
      >
        관심 표하기
      </button>
    </>
  );
}

export default InterestButton;
