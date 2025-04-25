import WatchHero from './assets/WatchHero.png';

function Watch() {
    return(
        <>
        <div class = "bg-gray-100 w-full h-145 overflow-hidden flex items-start justify-center mt-3">
            <div class = "pt-[61px] flex flex-col items-center gap-3 overflow-hidden">
                <h1 class = "text-5xl font-semibold"> Watch</h1>
                <h3 class = "text-xl font-medium">SERIES 10</h3>
                <h1 class = "text-3xl font-light">Thinstant classic.</h1>

                <div class = "flex flex-row gap-4 h-12">
                    <button class = "px-6 bg-blue-500 text-white rounded-full">
                        Learn more
                    </button>
                    
                    <button class = "px-5 border border-blue-500 text-blue-500 rounded-full">
                        Buy
                    </button>
                </div>

                <img src={WatchHero} alt="" class = "mt-4 w-[900px] h-[310px]"/>
            </div>
        </div>
        </>
    );
}

export default Watch