'use client';
import './globals.css';
import Header from '@/components/layouts/header/Header';
import TaskCreateDialog from 'features/tasks/components/dialog/TaskCreateDialog';
import ProjectProvider from '../features/projects/context/ProjectProvider';
import Main from './components/layouts/Main';
import { useState } from 'react';
import TaskProvider from 'features/tasks/context/TaskProvider';
import MessageProvider from './context/MessageProvider';
import Message from './components/elements/Message';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          <ProjectProvider>
            <MessageProvider>
              <Header onClick={setIsOpenDialog} />
              <Main children={children} />
              {isOpenDialog && (
                <TaskCreateDialog onCloseDialog={setIsOpenDialog} />
              )}
              <Message />
            </MessageProvider>
          </ProjectProvider>
        </TaskProvider>
      </body>
    </html>
  );
}
