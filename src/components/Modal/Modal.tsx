import { useModal } from '@/contexts/modal.context/modal.context';

function Modal({ children }: { children: React.ReactNode }) {
  const modal = useModal();
  const handleClickBackDrop = () => {
    modal.close();
  };

  return (
    <div
      className='bg-black/65 flex items-center justify-center fixed top-0 left-0 bottom-0 right-0 z-50'
      onClick={handleClickBackDrop}
    >
      <div
        className='bg-white max-w-96 w-full px-10 py-14 rounded'
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
