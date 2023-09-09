import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [hidden, toggleHidden] = useState(true);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 py-2">
      <div className="flex items-center flex-shrink-0 text-white mr-6 pl-4">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">JankBenchX</span>
        </Link>
      </div>
      <div className="block sm:hidden px-4">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={() => toggleHidden(!hidden)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
