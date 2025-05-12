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
        <div className="flex transition-transform duration-1500 ml-3 md:ml-14 mr-3 md:mr-38 gap-2" style={{ transform: `translateX(-${current * 100}%)`}}>
          {slide.map((slide, idx) => (

            <div key = {idx} className = {`min-w-full h-full relative transition-all duration-500 ease-in-out scale-100 ${idx === current ? ' opacity-100' : 'opacity-30'}`}>
              <img src={slide.image} alt={`Slide ${idx + 1}`} className = "w-full h-full object-cover brightness-95" />
              <div className = {`absolute inset-0 pl-6 md:pl-20 py-10 md:py-20 flex flex-row justify-start items-end p-4 md:p-8 text-white gap-2 md:gap-4 transition-all duration-1500 ease-in-out ${idx === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button className = "cursor-pointer px-3 md:px-5 py-1 md:py-2 bg-white text-black rounded-full w-fit text-sm md:text-base">{slide.buttonCaption}</button>
                <p className = "text-sm md:text-lg lg:text-xl font-light mb-1"> <span className = "font-semibold">{slide.genre}</span> <span className="hidden md:inline">{slide.caption}</span><span className="inline md:hidden">{slide.caption.substring(0, 30)}{slide.caption.length > 30 ? '...' : ''}</span></p>
              </div>
            </div>

              ))}
        </div>

        <button onClick={prevSlide} className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white bg-opacity-80 px-2 md:px-3 py-1 rounded-full shadow text-sm md:text-base">
            ‹
        </button>

        <button onClick={nextSlide} className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-white bg-opacity-80 px-2 md:px-3 py-1 rounded-full shadow text-sm md:text-base">
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