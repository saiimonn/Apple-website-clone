import baseballPic from '../assets/CarouselImages/baseball.jpeg';

export default function Baseball() {
    return(
        <>
            <a href = "#" className="relative min-w-full h-full">
                <img src={baseballPic} className="w-full h-full object-cover" alt="Friday Night Baseball" />
                <div className="absolute inset-0 pl-20 py-20 flex flex-row justify-start items-end p-8 bg-gradient-to-r from-black/50 to-transparent text-white gap-4">
                    <a href="#" className="px-5 py-3 bg-white text-black rounded-full">See the schedule</a>
                    <p className="text-xl font-light mb-2">Live MLB games, every Friday.</p>
                </div>
            </a>
        </>
    );
}