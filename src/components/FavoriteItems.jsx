import React, { useState, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === items.length - 5 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 5 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container flex items-center justify-center mt-10">
      <button
        className="prev-btn bg-gray-300 px-2 py-1 rounded"
        onClick={prevSlide}
      >
        Prev
      </button>
      <div className="carousel overflow-hidden mx-4">
        <div className="carousel-inner flex space-x-4">
          {items.slice(startIndex, startIndex + 5).map((item, index) => (
            <div key={index} className='border border-gray-300 rounded bg-red-500 h-80 w-60'>
              <>
              <img src={item.images[0]}></img>
              <p>{item.name}</p>
              <p>{item.price}</p>
              </>
            </div>
          ))}
        </div>
      </div>
      <button
        className="next-btn bg-gray-300 px-2 py-1 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
