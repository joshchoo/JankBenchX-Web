import React from 'react';

export const NotFound: React.FC = () => {
  return (
    <div
      data-testid="not-found"
      className="flex flex-col justify-center items-center"
      style={{ height: '60vh' }}
    >
      <div
        className="bg-cover"
        style={{
          backgroundImage: `url("https://i.imgur.com/Q2BAOd2.png)`,
          width: '40vh',
          height: '40vh',
        }}
      />
      <div className="pt-8 text-3xl">Not Found</div>
    </div>
  );
};
