import { useState } from 'react';

// const Carousel = () => {
//   const [index, setIndex] = useState(0);
//   const length = 3;
//   const handlePrevious = () => {
//     const newIndex = index - 1;
//    setIndex(newIndex < 0 ? length - 1 : newIndex);
//   };
  
//   const handleNext = () => {
//     const newIndex = index + 1;
//     setIndex(newIndex >= length ? 0 : newIndex);
//   };

const Carousel = () => {

  const banners = [
    { imageUrl: '/men.jpg', altText: 'Texto alternativo 1' },
    { imageUrl: '/women.jpg', altText: 'Texto alternativo 2' },
    { imageUrl: '/kids.jpg', altText: 'Texto alternativo 3' },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  const nextBanner = () => {
    setCurrentBanner((currentBanner + 1) % banners.length);
  };

  const prevBanner = () => {
    setCurrentBanner((currentBanner - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentBanner * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={banner.imageUrl}
                alt={banner.altText}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevBanner}
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={nextBanner}
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
