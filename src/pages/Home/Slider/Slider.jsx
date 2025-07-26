import React, { useState, useEffect } from 'react';

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/slide.png',
    '/slide1.png',
    '/slide2.png',
    '/slide3.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative w-full pb-20"
      style={{
        backgroundImage: `url("/hero.png")`,
        backgroundSize: 'contain',
        objectPosition: 'center',
        backgroundPosition: 'center',
        minHeight: '750px'
      }}
    >
      <div className="container mx-auto h-[750px] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url("${image}")` }}
              className="w-full h-full flex-shrink-0 relative rounded-lg object-cover"
            >

            </div>
          ))}
        </div>
      </div>

      {/* indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${currentSlide === index
              ? 'w-8 h-3 bg-[#136BFB]'
              : 'w-3 h-3 bg-neutral-700'
              }`}
          />
        ))}
      </div>
    </div>
  );
};