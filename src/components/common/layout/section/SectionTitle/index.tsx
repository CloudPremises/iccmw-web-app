import React from 'react';

interface IndexProps {
  title: string;
}

const Index: React.FC<IndexProps> = ({ title }) => {
  return (
    <div className='w-full bg-color-quaternary'>
      <div className='h-auto max-w-screen-xl mx-auto p-4'>
        <div className='w-full p-4 sm:flex sm:flex-col md:flex md:flex-col items-center justify-center gap-6 '>
          <h1 className='text-4xl font-bold capitalize'>{title}</h1>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Index;
