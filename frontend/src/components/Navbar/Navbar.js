import React from 'react';

import Logo from '../../assets/images/logo.svg'

const Navbar = () => {
  return (
  <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img src={Logo} alt={"Logo SortIT"}>
      </img>
      <span className="font-semibold text-xl tracking-tight">SortIT</span>
    </div>
    <div className="block lg:hidden">
     
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
