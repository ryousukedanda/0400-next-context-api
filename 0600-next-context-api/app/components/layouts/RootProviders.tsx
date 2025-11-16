import MessageProvider from '@/context/MessageProvider';
import { ModalProvider } from '@/context/ModalProvider';
import TaskProvider from 'features/tasks/context/TaskProvider';
import { ReactNode } from 'react';

interface RootProvidersProps {
  children: ReactNode;
}
const RootProviders = ({ children }: RootProvidersProps) => {
  return (
    <ModalProvider>
      <MessageProvider>
        <TaskProvider>{children}</TaskProvider>
      </MessageProvider>
    </ModalProvider>
  );
};

export default RootProviders;
