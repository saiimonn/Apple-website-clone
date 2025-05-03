import pic from '../assets/CarouselImages/theStudio.jpeg';

export default function studio() {
    return(
        <>
            <a href="#" className = "relative min-w-full h-full">
                <img src={pic} alt="" className = "w-full h-full object-cover"/>
                <div className = "absolute inset-0 pl-20 py-20 flex flex-row justify-start items-end p-8 bg-gradient-to-r from-black/50 to-transparent text-white gap-4">
                    <a href="#" className = "px-5 py-3 bg-white text-black rounded-full">Stream now</a>
                    <p className = "text-xl font-light mb-2"><span class = "font-semibold">Comedy</span> • Seth Rogen dives into the wild chaos of Hollywood in this all-star satire.</p>
                </div>
            </a>
        </>
    );
}