import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Your image URLs
  const images = [
    'https://ibb.co/8LQnPZWY',
    'https://ibb.co/fzZ3Xr1H', 
    'https://ibb.co/dsF2yyPB',
    'https://ibb.co/xKPDn39v'
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full container my-10 mx-auto bg-gradient-to-br from-blue-50 to-purple-100 rounded-2xl overflow-hidden shadow-2xl">
      {/* Main slider container */}
      <div className="relative h-96 overflow-hidden">
        {/* Slider content */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
              <div
              key={index}
                style={{ backgroundImage: `url("${image}")` }}
              className="w-full h-full flex-shrink-0 relative"
              >

            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Gradient rounded indicators at bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-white/20 backdrop-blur-md rounded-full px-4 py-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? 'w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-600'
                : 'w-3 h-3 bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Additional decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Slider;