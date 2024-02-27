'use client';

import { createContext, useContext, useState } from 'react';

type ModalContext = {
  modal: React.ReactElement | null;
  open: (modal: React.ReactElement) => void;
  close: () => void;
};

const initialValue: ModalContext = {
  modal: null,
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<ModalContext['modal']>(null);

  const open: ModalContext['open'] = (modal) => setModal(modal);
  const close: ModalContext['close'] = () => {
    setModal(null);
  };

  const value = {
    modal,
    open,
    close,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal}
    </ModalContext.Provider>
  );
}
