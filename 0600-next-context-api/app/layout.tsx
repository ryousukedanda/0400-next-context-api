'use client';
import './globals.css';
import Header from '@/components/layouts/header/Header';
import ProjectProvider from '../features/projects/context/ProjectProvider';
import Main from './components/layouts/Main';
import { useState } from 'react';
import TaskProvider from 'features/tasks/context/TaskProvider';
import MessageProvider from './context/MessageProvider';
import Message from './components/elements/Message';
import TaskDialog from 'features/tasks/components/dialog/TaskDialog';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  return (
    <html lang="en">
      <body>
        <MessageProvider>
          <TaskProvider>
            <ProjectProvider>
              <Header onClick={() => setIsOpenDialog(true)} />
              <Main>{children}</Main>
              {isOpenDialog && (
                <TaskDialog onClose={() => setIsOpenDialog(false)} />
              )}
              <Message />
            </ProjectProvider>
          </TaskProvider>
        </MessageProvider>
      </body>
    </html>
  );
}
