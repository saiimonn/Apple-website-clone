import caremePic from '../assets/CarouselImages/careme.jpeg';

export default function Careme() {
    return(
        <>
            <a href = "#" className="relative min-w-full h-full">
                <img src={caremePic} className="w-full h-full object-cover" alt="Friday Night Baseball" />
                <div className="absolute inset-0 pl-20 py-20 flex flex-row justify-start items-end p-8 bg-gradient-to-r from-black/50 to-transparent text-white gap-4">
                    <a href="#" className="px-5 py-3 bg-white text-black rounded-full">Stream now</a>
                    <p className="text-xl font-light mb-2"> <span class = "font-semibold">Drama</span> • A brilliant, seductive chef turns to espionage in Napoleon-era France.</p>
                </div>
            </a>
        </>
    )
}