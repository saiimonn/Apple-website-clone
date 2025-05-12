import slide from './data/SmallCarouselSlides.js';

const duplicatedSlides = [...slide, ...slide, ...slide, ...slide, ...slide];

export default function SmallCarousel() {
  return (
    <div className="w-full overflow-hidden mt-6">
      <div
        className="carousel-track flex gap-4"
        style={{ animation: 'scroll 350s linear infinite' }}
      >
        {duplicatedSlides.map((slideItem, idx) => (
          <div key={idx} className="w-120 h-60 flex-shrink-0 relative group hover:brightness-70 hover:cursor-pointer overflow-hidden">
            <img
              src={slideItem.image}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div className="flex justify-between items-end">
                <h3 className="text-md font-medium">{slideItem.title}</h3>
                <p className="text-lg text-gray-200">{slideItem.category}</p>
              </div>
            </div>
            
            <button className="absolute px-3 py-2 bg-white text-black text-sm font-light rounded-full hover:opacity-90 transition-all duration-600 ease-in-out transform group-hover:-translate-y-15  translate-y-20 left-1/2 -translate-x-1/2 bottom-8 ">
              {slideItem.buttonCaption}
            </button>
          </div>
        ))}
      </div>

      <style>
        {`
          .carousel-track {
            width: max-content;
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-${slide.length * 100}% - ${(slide.length - 1) * 16}px)); }
          }
        `}
      </style>
    </div>
  );
}