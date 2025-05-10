import slide from './data/SmallCarouselSlides.js';

const duplicatedSlides = [...slide, ...slide, ...slide, ...slide, ...slide]; 

export default function SmallCarousel() {
  return (
    <div className="w-full overflow-hidden mt-6">
      <div className="carousel-track flex gap-4" style={{ animation: 'scroll 400s linear infinite'}}>

        {duplicatedSlides.map((slideItem, idx) => (
          <div key={idx} className="w-118 h-70 flex-shrink-0 relative">
            <img src={slideItem.image} alt={`Slide ${idx + 1}`} className="w-full h-full object-cover"/>

            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="absolute bottom-4 text-md font-medium">{slideItem.title}</h3>
              <p className="absolute bottom-4 left-96 text-lg text-gray-200">{slideItem.category}</p>
              <button className="absolute bottom-30 left-50 px-3 py-1 bg-white text-black text-sm font-medium rounded-full hover:opacity-90 hidden">
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