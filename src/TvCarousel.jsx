import { useState, useEffect } from "react";
import { slides, mobileSlides } from './data/TVCarouselSlides.js';

// Create arrays with wrapped slides for infinite loop effect
const desktopSlide = [slides[slides.length - 1], ...slides, slides[0]];
const mobileSlide = [mobileSlides[mobileSlides.length - 1], ...mobileSlides, mobileSlides[0]];

export default function TVCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle resize events to toggle between mobile and desktop images
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slide = isMobile ? mobileSlide : desktopSlide;

  const nextSlide = () => {
    setCurrent((curr) => curr + 1);
  };

  const prevSlide = () => {
    setCurrent((curr) => curr - 1);
  };

  useEffect(() => {
    if (!isTransitioning) return;

    const timeout = setTimeout(() => {
      if (current === slide.length - 1) {
        setIsTransitioning(false);
        setCurrent(1);
      } else if (current === 0) {
        setIsTransitioning(false);
        setCurrent(slide.length - 2);
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, [current, slide.length]);

  return (
    <>
      <div className="relative w-full overflow-hidden h-auto mt-3">
        <div className={`flex transition-transform duration-1500 ${isMobile ? 'mx-auto' : 'ml-3 md:ml-14 mr-3 md:mr-38 gap-2'} `} style={{ transform: `translateX(-${current * 100}%)`}}>
          {slide.map((slide, idx) => (

            <div key={idx} className={`min-w-full h-full relative transition-all duration-500 ease-in-out scale-100 ${idx === current ? 'opacity-100' : 'opacity-30'}`}>
              <div className="relative w-full h-full flex justify-center items-center">
                <img 
                  src={slide.image} 
                  alt={`Slide ${idx + 1}`} 
                  className={`${isMobile ? 'w-full h-full object-contain max-h-[450px] brightness-95' : 'w-full h-full object-cover'} brightness-95`}
                />
                {isMobile ? (
                  // Mobile column layout
                  <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-10 text-white">
                    <div className={`flex flex-col gap-2 max-w-xs transition-all duration-700 ease-out ${idx === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                      {slide.genre && (
                        <p className="text-xs sm:text-xs md:text-xs font-semibold transition-all duration-700 delay-100 ease-out" style={{transform: idx === current ? 'translateY(0)' : 'translateY(20px)'}}>
                          {slide.genre}
                        </p>
                      )}
                      <p className="text-xs sm:text-xs md:text-xs lg:text-lg font-light mb-3 text-center overflow-visible transition-all duration-700 delay-200 ease-out" style={{transform: idx === current ? 'translateY(0)' : 'translateY(20px)'}}>
                        {slide.caption}
                      </p>
                      <button className="cursor-pointer px-4 py-1.5 bg-white text-black rounded-full text-xs sm:text-xs md:text-xs mx-auto transition-all duration-700 delay-300 ease-out" style={{transform: idx === current ? 'translateY(0)' : 'translateY(20px)'}}>
                        {slide.buttonCaption}
                      </button>
                    </div>
                  </div>
                ) : (
                  // Desktop row layout
                  <div className="absolute inset-0 pl-20 py-20 flex flex-row justify-start items-end p-8 text-white gap-4">
                    <div className={`flex flex-row gap-4 items-end transition-all duration-1500 ease-out ${idx === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
                      <button className="cursor-pointer px-5 py-2 bg-white text-black rounded-full w-fit text-sm md:text-xs transition-all duration-700 delay-100 ease-out" style={{transform: idx === current ? 'translateY(0)' : 'translateY(20px)'}}>
                        {slide.buttonCaption}
                      </button>
                      <p className="text-base md:text-lg lg:text-xl font-light mb-1 transition-all duration-700 delay-200 ease-out" style={{transform: idx === current ? 'translateY(0)' : 'translateY(20px)'}}> 
                        <span className="font-semibold">{slide.genre}</span> {slide.caption}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          ))}
        </div>

        <button onClick={prevSlide} className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white bg-opacity-80 px-2 md:px-3 py-1 rounded-full shadow text-xs sm:text-sm md:text-base z-10">
            ‹
        </button>

        <button onClick={nextSlide} className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white bg-opacity-80 px-2 md:px-3 py-1 rounded-full shadow text-xs sm:text-sm md:text-base z-10">
            ›
        </button>
      </div>

      <div className="w-full flex justify-center gap-2 md:gap-3 mt-2 md:mt-4">
        {slide.map((_, idx) => (
          <button key={idx} onClick={() => setCurrent(idx)} className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${current === idx ? "bg-black" : "bg-gray-300"}`}/>
        ))}
      </div>
    </>
  );
}