import IphoneHero from './assets/HeroImages/IphoneHero.png';

function Iphone() {
    return(
        <div class = "bg-gray-100 w-full h-170 overflow-hidden flex flex-col items-center justify-center mt-3">
            <div class = "flex flex-col pt-[58px] items-center gap-4 z-50">
                <h1 class = "text-4xl sm:text-5xl md:text-6xl font-semibold">iPhone</h1>
                <p class = "text-xl sm:text-2xl md:text-3xl font-light">Meet the iPhone 16 family.</p>

                <div class = "flex flex-row gap-4 h-12">
                    <button class = "px-6 bg-blue-500 text-white rounded-full">
                        Learn more
                    </button>
                    
                    <button class = "px-6 border border-blue-500 text-blue-500 rounded-full">
                        Shop iPhone
                    </button>
                </div>

                <p class = "mt-2 mb-4 text-base sm:text-lg md:text-xl font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Built for Apple Intelligence.</p>

                
            </div>

            <img src={IphoneHero} alt="iPhone Hero" class="mt-8 w-[600px] h-[355px]"/>
        </div>
    );
}

export default Iphone