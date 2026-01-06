'use client';
import './globals.css';
import Header from '@/components/layouts/header/Header';
import Main from './components/layouts/Main';
import Message from './components/elements/Message';
import TaskDialog from 'features/tasks/components/dialog/TaskDialog';
import RootProviders from './components/layouts/RootProviders';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootProviders>
          <Header />
          <Main>{children}</Main>
          <Message />
          <TaskDialog />
        </RootProviders>
      </body>
    </html>
  );
}
