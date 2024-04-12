import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 px-4">
      <div className="max-w-screen-xl mx-auto text-gray-700 text-center lg:text-left lg:flex lg:justify-between lg:items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <p className="text-lg font-semibold">Modio - Your Favorite Clothing Store</p>
          <p className="mt-2">Address: 123 Main Street, City, Country</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="mt-6 lg:mt-0">
          <a href="#" className="mr-4 text-gray-700 hover:text-gray-900">About Us</a>
          <a href="#" className="mr-4 text-gray-700 hover:text-gray-900">Contact Us</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
        </div>
        <div className="mt-6">
          <p>&copy; {new Date().getFullYear()} Modio. All rights reserved.</p>
          <p className="mt-2">Designed and Developed by Your Company</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
