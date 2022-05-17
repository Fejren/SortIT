import React from 'react';

import Logo from '../../assets/images/logo.svg'

const Navbar = () => {
  return (
  <nav class="flex items-center justify-between flex-wrap bg-gray-700 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <img src={Logo}>
      </img>
      <span class="font-semibold text-xl tracking-tight">SortIT</span>
    </div>
    <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
