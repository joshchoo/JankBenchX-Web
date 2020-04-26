import React from 'react';

export const ErrorPage: React.FC = () => {
  return (
    <div
      data-testid="error-page"
      className="flex flex-col justify-center items-center"
      style={{ height: '60vh' }}
    >
      <div
        className="bg-cover"
        style={{
          backgroundImage: `url("https://i.imgur.com/yW2W9SC.png)`,
          width: '40vh',
          height: '40vh',
        }}
      />
      <div className="pt-8 text-3xl">An error occurred :(</div>
    </div>
  );
};
