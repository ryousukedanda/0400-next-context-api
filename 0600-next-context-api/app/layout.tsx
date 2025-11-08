'use client';
import './globals.css';
import Header from '@/components/layouts/header/Header';
import TaskCreateDialog from 'features/tasks/components/TaskCreateDialog';
import ProjectProvider from './context/ProjectContext';
import Main from './components/layouts/Main';
import { useState } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClickAddIcon, setIsClickAddIcon] = useState<boolean>(false);
  return (
    <html lang="en">
      <body>
        <ProjectProvider>
          <Header onClick={setIsClickAddIcon} />
          <Main children={children} />
          <TaskCreateDialog onClose={setIsClickAddIcon} />
        </ProjectProvider>
      </body>
    </html>
  );
}
