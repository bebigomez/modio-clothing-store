import React from 'react';
import { Search, ShoppingBag } from 'react-feather';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = ({ items }) => {
  return (
    <>
      <header className="bg-black px-6 py-5 flex justify-between items-center fixed">
        <Link className="text-white text-2xl font-bold" to={'/'}>
          Logo
        </Link>
        <nav className="flex justify-center items-center">
          <div className="flex space-x-4 text-white">
            <Link className="hover:text-gray-300 text-2xl mx-4" to={'/women'}>
              WOMEN
            </Link>
            <Link className="hover:text-gray-300 text-2xl mx-4" to={'/men'}>
              MEN
            </Link>
            <Link
              href="#"
              className="hover:text-gray-300 text-2xl mx-4"
              to={'/kids'}
            >
              KIDS
            </Link>
          </div>
        </nav>
        <div className="flex flex-row">
          <div className="text-white flex items-center">
            <Search className="mr-6" />
          </div>
          <div className="text-white">
            <Link to={'/cart'}>
              <ShoppingBag />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
