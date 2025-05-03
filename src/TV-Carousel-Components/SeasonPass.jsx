import MESSI from '../assets/CarouselImages/seasonPass.jpg';

export default function sPass() {
    return(
        <>
            <a href="#" className = "relative min-w-full h-full">
                <img src={MESSI} alt="" className = "w-full h-full object-cover"/>
                <div className = "absolute inset-0 pl-20 py-20 flex flex-row justify-start items-end p-8 bg-gradient-to-r from-black/50 to-transparent text-white gap-4">
                    <a href="#" className = "px-5 py-3 bg-white text-black rounded-full">See the schedule</a>
                    <p className = "text-xl font-light mb-2">Watch every club, every match, live—all season long.</p>
                </div>
            </a>
        </>
    );
}