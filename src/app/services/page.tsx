import Navbar from '@/components/Menu/Navbar';
import React from 'react';

const Services = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center  font-mono text-sm lg:flex">
        <Navbar />
      </div>
      <h1>Services</h1>
    </main>
  );
};

export default Services;
