import React, { useState, useEffect } from 'react';

export default function Slider({
  images = [
    '/slide.png',
    '/slide1.png',
    '/slide2.png',
    '/slide3.png'
  ],
  autoPlay = true,
  autoPlayInterval = 3000,
  showIndicators = true,
  showNavigation = false,
  height = 'responsive', // 'responsive', 'fixed', or custom height
  backgroundImage = '/hero.png',
  className = ''
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlay, autoPlayInterval]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  // Dynamic height classes based on height prop
  const getHeightClasses = () => {
    if (height === 'responsive') {
      return {
        container: 'pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8',
        slider: 'h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[750px]',
        minHeight: '300px'
      };
    } else if (height === 'fixed') {
      return {
        container: 'pb-20 px-4 sm:px-6 md:px-8',
        slider: 'h-[750px]',
        minHeight: '750px'
      };
    } else {
      return {
        container: 'pb-20 px-4 sm:px-6 md:px-8',
        slider: `h-[${height}]`,
        minHeight: height
      };
    }
  };

  const heightClasses = getHeightClasses();

  return (
    <div
      className={`relative w-full ${heightClasses.container} ${className}`}
      style={{
        backgroundImage: backgroundImage ? `url("${backgroundImage}")` : 'none',
        backgroundSize: 'contain',
        objectPosition: 'center',
        backgroundPosition: 'center',
        minHeight: heightClasses.minHeight
      }}
    >
      <div className={`container mx-auto ${heightClasses.slider} overflow-hidden pt-10`}>
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{ 
                backgroundImage: `url("${image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              className="w-full h-full flex-shrink-0 relative rounded-lg"
            >

            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showNavigation && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className={`absolute ${height === 'responsive' ? 'bottom-12 sm:bottom-8 md:bottom-16 lg:bottom-28' : 'bottom-28'} left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3`}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === index
                  ? height === 'responsive'
                    ? 'w-6 h-2 sm:w-8 sm:h-3 bg-[#136BFB]'
                    : 'w-8 h-3 bg-[#136BFB]'
                  : height === 'responsive'
                    ? 'w-2 h-2 sm:w-3 sm:h-3 bg-neutral-700'
                    : 'w-3 h-3 bg-neutral-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};