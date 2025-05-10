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
          <div key={idx} className="w-120 h-60 flex-shrink-0 relative group">
            <img
              src={slideItem.image}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">

              <div className = "flex justify-between items-end">
                <h3 className="text-md font-medium">{slideItem.title}</h3>
                <p className="text-lg text-gray-200">{slideItem.category}</p>
              </div>

              <button className="absolute bottom-30 left-50 px-3 py-1 bg-white text-black text-sm font-medium rounded-full hover:opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {slideItem.buttonCaption}
              </button>
            </div>
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