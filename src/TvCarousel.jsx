import { useState, useEffect } from "react";
import slides from './data/TVCarouselSlides.js';

const slide = [slides[slides.length - 1], ...slides, slides[0]];

export default function TVCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

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
  }, [current]);

  return (
    <>
      <div className="relative w-full overflow-hidden h-170 mt-3">
        <div className="flex transition-transform duration-1500 ml-14 mr-38 gap-2" style={{ transform: `translateX(-${current * 100}%)`}}>
          {slide.map((slide, idx) => (

            <div key = {idx} className = {`min-w-full h-full relative transition-all duration-500 ease-in-out scale-100 ${idx === current ? ' opacity-100' : 'opacity-30'}`}>
              <img src={slide.image} alt={`Slide ${idx + 1}`} className = "w-full h-full object-cover" />
              <div className = {`absolute inset-0 pl-20 py-20 flex flex-row justify-start items-end p-8  text-white gap-4 transition-all duration-1500 ease-in-out ${idx === current ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <button className = "cursor-pointer px-5 py-2 bg-white text-black rounded-full w-fit">{slide.buttonCaption}</button>
                <p className = "text-xl font-light mb-1"> <span className = "font-semibold">{slide.genre}</span> {slide.caption}</p>
              </div>
            </div>

              ))}
        </div>

        <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-80 px-3 py-1 rounded-full shadow">
            ‹
        </button>

        <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-80 px-3 py-1 rounded-full shadow">
            ›
        </button>
      </div>

      <div className="w-full flex justify-center gap-3 mt-4">
            {slide.map((_, idx) => (
            <button key={idx} onClick={() => setCurrent(idx)} className={`w-2 h-2 rounded-full ${current === idx ? "bg-black" : "bg-gray-300"}`}/>
            ))}
      </div>
    </>
  );
}