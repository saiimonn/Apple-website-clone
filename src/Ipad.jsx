import ipad from './assets/HeroImages//ipadLG.jpg';

function MothersDay() {
    return(
        <>
            <div class = "bg-gray-100 w-full h-145 overflow-hidden flex flex-col items-center mt-3">
                <div class = "absolute pt-[40px] flex flex-col items-center gap-3 overflow-hidden">
                    <h1 class = "text-5xl text-white font-semibold">iPad Pro</h1>
                    <p class = "text-3xl text-white font-light">Ubelievably thin. Incredibly powerful.</p>

                    <div class = "flex gap-4">
                        <button class = "px-5   py-3 bg-blue-500 text-white rounded-full font-light">Learn more</button>
                        <button class = "px-6 py-3 border border-blue-500 text-blue-500 rounded-full">Buy</button>
                    </div>
                    
                    <p class = "mt-72  mb-4 text-xl font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Built for Apple Intelligence.</p>
                </div>
                <img src={ipad} alt="" class = "w-[3008px] h-[580px]"/>
            </div>
        </>
    );
}

export default MothersDay