'use client';
import './globals.css';
import Header from '@/components/layouts/header/Header';
import Sidebar from './components/layouts/sidebar/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="flex h-[calc(100vh-72px)] font-light">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
