import React from 'react';
import Navbar from '../../components/Menu/Navbar';

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="z-10 w-full items-center  font-mono text-sm lg:flex">
        <Navbar />
      </div>
      <h1>About</h1>
    </main>
  );
};

export default About;
