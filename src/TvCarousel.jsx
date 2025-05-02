import { useState } from "react";
import baseball from './assets/CarouselImages/baseball.jpeg';
import careme from './assets/CarouselImages/careme.jpeg';
import dThief from './assets/CarouselImages/dopeThief.jpg';
import friends from './assets/CarouselImages/friendsNeighbors.jpg';
import govCheese from './assets/CarouselImages/govCheese.jpg';
import season from './assets/CarouselImages/seasonPass.jpg';
import severance from './assets/CarouselImages/severance.jpg';
import shrinking from './assets/CarouselImages/shrinking.jpeg';
import ted from './assets/CarouselImages/tedLasso.jpeg';
import studio from './assets/CarouselImages/theStudio.jpeg';

const images = [
  friends,
  studio,
  careme,
  severance,
  season,
  dThief,
  ted,
  baseball,
  govCheese,
  shrinking,
];

function TVCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
        <div className="relative w-full overflow-hidden h-170 mt-3">
            <div
                className="flex transition-transform duration-500 ml-14 mr-38 gap-4"
                style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((src, idx) => (
                <img
                    key={idx}
                    src={src}
                    className="min-w-full h-full object-cover"
                    alt={`Slide ${idx + 1}`}
                />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-80 px-3 py-1 rounded-full shadow"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-80 px-3 py-1 rounded-full shadow"
            >
                ›
            </button>

            <div className="absolute bottom-4 w-full flex justify-center gap-2">
                {images.map((_, idx) => (
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

export default TVCarousel;