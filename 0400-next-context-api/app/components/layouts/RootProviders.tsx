import { ErrorProvider } from '@/context/ErrorProvider';
import MessageProvider from '@/context/MessageProvider';
import { ModalProvider } from '@/context/ModalProvider';
import TaskProvider from 'features/tasks/context/TaskProvider';
import { ProjectProvider } from 'features/projects/context/ProjectProvider';
import { ReactNode } from 'react';

interface RootProvidersProps {
  children: ReactNode;
}
const RootProviders = ({ children }: RootProvidersProps) => {
  return (
    <ModalProvider>
      <MessageProvider>
        <ErrorProvider>
          <ProjectProvider>
            <TaskProvider>{children}</TaskProvider>
          </ProjectProvider>
        </ErrorProvider>
      </MessageProvider>
    </ModalProvider>
  );
};

export default RootProviders;
