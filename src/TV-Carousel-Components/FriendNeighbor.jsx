import fNeighborPic from '../assets/CarouselImages/friendsNeighbors.jpg';

export default function friendNeighbor() {
    return(
        <>
            <a href="#" className = "relative min-w-full h-full">
                <img src={fNeighborPic} alt="" className = "w-full h-full object-cover"/>
                <div className = "absolute inset-0 pl-20 py-20 flex flex-row justify-start items-end p-8 bg-gradient-to-r from-black/50 to-transparent text-white gap-4">
                    <a href="#" className = "px-5 py-3 bg-white text-black rounded-full">Stream now</a>
                    <p className = "text-xl font-light mb-2"><span class = "font-semibold">Drama</span> • Live your best lie.</p>
                </div>
            </a>
        </>
    );
}