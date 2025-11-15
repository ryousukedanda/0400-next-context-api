import { ReactNode } from 'react';
import Sidebar from './sidebar/Sidebar';

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="flex h-[calc(100vh-72px)] font-light">
      <Sidebar />
      {children}
    </main>
  );
};

export default Main;
