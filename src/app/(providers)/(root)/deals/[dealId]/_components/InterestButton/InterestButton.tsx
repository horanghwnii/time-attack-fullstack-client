'use client';

import LogInModal from '@/app/(providers)/(root)/_components/Header/components/LogInModal';
import { useAuth } from '@/contexts/auth.context/auth.context';
import { useModal } from '@/contexts/modal.context/modal.context';

interface InterestButtonProps {
  dealId: number;
  email: string;
}

function InterestButton({ dealId, email }: InterestButtonProps) {
  const { isLoggedIn, email: userEmail } = useAuth();
  const modal = useModal();

  const handleClickInterestButton = () => {
    if (!isLoggedIn) return modal.open(<LogInModal />);
    alert('그래! 잘 눌렀다!');
  };

  const isEqual = email === userEmail;

  return (
    <button
      className='px-4 py-2 font-bold bg-blue-400 text-white rounded'
      onClick={handleClickInterestButton}
    >
      관심 표하기
    </button>
  );
}

export default InterestButton;
