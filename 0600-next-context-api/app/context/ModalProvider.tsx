import { createContext, useContext, useState, ReactNode } from 'react';

type ModalName = 'task' | null;

interface ModalContextType {
  openModal: ModalName;
  showModal: (name: ModalName) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [openModal, setOpenModal] = useState<ModalName>(null);

  const showModal = (name: ModalName) => setOpenModal(name);
  const closeModal = () => setOpenModal(null);

  return (
    <ModalContext.Provider value={{ openModal, showModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('ModalContextがundefinedかnullです。');
  }
  return ctx;
};
