'use client';
import { useState } from 'react';
import Image from 'next/image';

const InspirationSection = () => {
  const images = [
    { 
      id: 1, 
      src: "/image-2.jpg", 
      alt: "Room inspiration",
      label: "",
      title: ""
    },
    { 
      id: 2, 
      src: "/image-3.jpg", 
      alt: "Room inspiration",
      label: "01 — Bed Room",
      title: "Inner Peace" 
    },

    { 
      id: 3, 
      src: "/image-2.jpg", 
      alt: "Room inspiration",
      label: "02 — Living Room",
      title: "Modern Elegance" 
    },
    { 
      id: 4, 
      src: "/image-3.jpg", 
      alt: "Room inspiration",
      label: "03 — Kitchen",
      title: "Minimalist Design" 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full px-4 lg:px-8 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-gray-900">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="text-gray-600 mb-6 max-w-md mx-auto lg:mx-0">
            Our designers already made a lot of beautiful prototypes of rooms that inspire you
          </p>
          <button className="bg-[#b88e2f] text-white px-6 py-3 font-medium hover:bg-[#a17a25] transition-colors duration-300 rounded">
            Explore More
          </button>
        </div>

        
        <div className="lg:w-1/2 w-full">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full">
                <Image 
                  src={images[currentIndex].src} 
                  alt={images[currentIndex].alt} 
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={currentIndex === 0}
                />
              </div>
              
              
              <div className="relative h-[250px] sm:h-[300px] md:h-[350px] w-full">
                <Image 
                  src={images[(currentIndex + 1) % images.length].src} 
                  alt={images[(currentIndex + 1) % images.length].alt} 
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                
                {images[(currentIndex + 1) % images.length].label && (
                  <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 rounded-b-lg">
                    <span className="text-xs md:text-sm text-gray-500">
                      {images[(currentIndex + 1) % images.length].label}
                    </span>
                    <h3 className="text-base md:text-lg font-medium text-gray-900">
                      {images[(currentIndex + 1) % images.length].title}
                    </h3>
                  </div>
                )}
              </div>
            </div>

            
            <div className="hidden md:block">
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                aria-label="Previous slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-all"
                aria-label="Next slide"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-[#b88e2f] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;