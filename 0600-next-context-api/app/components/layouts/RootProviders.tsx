import { ErrorProvider } from '@/context/ErrorProvider';
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
        <ErrorProvider>
          <TaskProvider>{children}</TaskProvider>
        </ErrorProvider>
      </MessageProvider>
    </ModalProvider>
  );
};

export default RootProviders;
