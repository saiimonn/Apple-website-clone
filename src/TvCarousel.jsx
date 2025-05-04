import { useState } from "react";
import slides from './data/TVCarouselSlides.js';

export default function TVCarousel() {

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="relative w-full overflow-hidden h-170 mt-3">
        <div className="flex transition-transform duration-500 ml-14 mr-38 gap-4" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide, idx) => (

            <div key = {idx} className = "min-w-full h-full relative">
              <img src={slide.image} alt={`Slide ${idx + 1}`} className = "w-full h-full object-cover" />
              <div className = "absolute inset-0 pl-20 py-20 flex flex-row justify-start items-end p-8  text-white gap-4">
                <button class = "cursor-pointer px-5 py-2 bg-white text-black rounded-full w-fit">{slide.buttonCaption}</button>
                <p className = "text-xl font-light mb-1"> <span class = "font-semibold">{slide.genre}</span> {slide.caption}</p>
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

        <div className="absolute bottom-4 w-full flex justify-center gap-2">
            {slides.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? "bg-black" : "bg-gray-300"}`}
            />
            ))}
        </div>
      </div>
    </>
  );
}