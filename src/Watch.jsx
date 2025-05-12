import WatchHero from './assets/HeroImages//WatchHero.png';

function Watch({showRegionHeader}) {
    return(
        <>
        <div class = "bg-gray-100 w-full h-145 overflow-hidden flex items-start justify-center mt-3" style = {{marginTop: showRegionHeader ? "7rem" : "0rem"}}>
            <div class = "flex flex-col items-center gap-3 overflow-hidden" style = {{paddingTop: showRegionHeader ? "20px" : "90px"}}>
                <h1 class = "text-3xl sm:text-4xl md:text-5xl font-semibold"> WATCH</h1>
                <h3 class = "text-base sm:text-lg md:text-xl font-medium tracking-widest">SERIES 10</h3>
                <h1 class = "text-xl sm:text-2xl md:text-3xl font-light">Thinstant classic.</h1>

                <div class = "flex flex-row gap-4 h-12">
                    <button class = "px-6 bg-blue-600 text-white rounded-full">
                        Learn more
                    </button>
                    
                    <button class = "px-5 border border-blue-500 text-blue-500 rounded-full">
                        Buy
                    </button>
                </div>

                <img src={WatchHero} alt="" class = "mt-4 w-[900px] h-[400px]" style = {{height: showRegionHeader ? "400px" : "300px"}}/>
            </div>
        </div>
        </>
    );
}

export default Watch