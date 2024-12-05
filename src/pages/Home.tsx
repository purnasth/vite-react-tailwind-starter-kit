import React from 'react';
import Intro from '../components/Intro';

const Home: React.FC = () => {
  return (
    <>
      {/* <main className="flex h-screen w-full items-center justify-center">
        <h1 className="text-center font-serif text-5xl capitalize">
          Welcome to Vite + React and tailwindCSS starter Kit
        </h1>
      </main> */}
      <Intro />
    </>
  );
};

export default Home;
