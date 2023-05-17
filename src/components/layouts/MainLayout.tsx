import Navbar from '@/components/Menu/Navbar';
import React from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="z-10 w-full items-center  font-mono text-sm lg:flex">
        <Navbar />
      </div>

      {children}
    </main>
  );
}
