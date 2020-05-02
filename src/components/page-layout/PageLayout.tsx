import React from 'react';

export const PageLayout: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center p-3">
      <div className="max-w-screen-lg w-full p-8 rounded-md bg-gray-100">
        {children}
      </div>
    </div>
  );
};
