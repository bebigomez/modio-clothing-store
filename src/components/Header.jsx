import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag } from 'react-feather';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const cartItemsCount = useSelector((state) => state.cart.length);

  const handleSearchBar = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    navigate(`/search?q=${searchQuery}`);
    setSearchOpen(false); // Close Search Bar after search.
    setSearchQuery('');
  };

  return (
    <header className="fixed w-full z-10 flex flex-col bg-white/50 backdrop-blur-md px-6 py-5 justify-center">
      <div className="flex">
        <Link className="text-black font-bold text-md md:text-2xl" to={'/'}>
          <img src="/modio-logo.svg" style={{ height: '32px' }} alt="logo" />
        </Link>
        <nav className="flex-grow flex justify-center space-x-3 text-black font-roboto-condensed text-md md:text-2xl">
          <Link to={'/women'}>WOMEN</Link>
          <Link to={'/men'}>MEN</Link>
          <Link to={'/kids'}>KIDS</Link>
        </nav>
        <div className="flex space-x-3 text-black relative">
          <Search
            className="h-4 md:h-8 cursor-pointer"
            onClick={() => setSearchOpen(!searchOpen)}
          />
          <Link to={'/cart'}>
            <ShoppingBag className="h-4 md:h-8" />
            {cartItemsCount > 0 && ( // Show counter only if there are items on the cart.
              <div className="absolute top-0 right-0 -mt-1.5 -mr-2 bg-red-500 text-white text-sm rounded-full w-5 h-5 flex justify-center items-center">
                {cartItemsCount}
              </div>
            )}
          </Link>
        </div>
      </div>

      {searchOpen && (
        <div className="flex space-x-1 md:w-1/2 self-center mt-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchBar}
            onKeyDown={handleKeyPress}
            placeholder="Search..."
            className="border border-gray-300 rounded-md px-2 py-1 flex-grow"
          />
          <button
            onClick={handleSearch}
            className="bg-black md:text-xl text-white px-2 py-1 rounded"
          >
            Search
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
