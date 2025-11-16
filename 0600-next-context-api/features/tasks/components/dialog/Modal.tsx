import { useModal } from '@/context/ModalProvider';
import { useClickOutside } from 'features/tasks/hooks/useClickOutside';
import { ReactNode, useRef } from 'react';

interface ModalProps {
  children: ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  const DialogRef = useRef<HTMLDivElement | null>(null);
  const { openModal, closeModal } = useModal();

  useClickOutside(DialogRef, closeModal, 'task' === openModal);

  return (
    <div className="block bg-overlay absolute z-10 top-0 w-full min-h-full">
      <div
        className="w-[60%] bg-light shadow-[1px_2px_6px_4px_#22222230] mt-[5%] mx-auto mb-auto"
        ref={DialogRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
