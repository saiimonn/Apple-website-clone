import IphoneHero from './assets/IphoneHero.png';

function Iphone({ showRegionHeader }) {
    return(
        <div class = "bg-gray-100 w-full h-170 overflow-hidden flex flex-col items-center justify-center" style = {{height: showRegionHeader ? "42.5rem" : "38.5rem"}}>
            <div class = "mt-30 flex flex-col items-center gap-4 z-50">
                <h1 class = "text-5xl font-semibold">iPhone</h1>
                <p class = "text-2xl font-light">Meet the iPhone 16 family.</p>

                <div class = "flex flex-row gap-4 h-12">
                    <button class = "px-6 bg-blue-500 text-white rounded-full">
                        Learn more
                    </button>
                    
                    <button class = "px-6 border border-blue-500 text-blue-500 rounded-full">
                        Shop iPhone
                    </button>
                </div>

                <p class = "mt-2 mb-4 text-xl font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Built for Apple Intelligence.</p>

                
            </div>

            <img src={IphoneHero} alt="iPhone Hero" class="mt-8 w-[600px] h-[300px]"/>
        </div>
    );
}

export default Iphone