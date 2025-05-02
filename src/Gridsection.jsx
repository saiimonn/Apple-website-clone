import MdayMD from './assets/MothersDayMD.png';
import macPic from './assets/MacbookMD.jpg';
import macDo from './assets/MacDoMD.jpg';
import tradePic from './assets/TradeIn.jpg';
import promoPic from './assets/PromoMD.jpg';
import cardPic from './assets/Card.jpg';

import Macbook from './Grid Components/MacbookAir.jsx';
import MacDoesThat from './Grid Components/MacDoesThat.jsx';
import Trade from './Grid Components/Trade.jsx';
import Deals from './Grid Components/CarrierDeals.jsx';
import Card from './Grid Components/Card.jsx';
import Mday from './Grid Components/MothersDay.jsx';

function Gridsection() {
    return(
        <>
            <div class = "grid grid-cols-1 sm:grid-cols-2 mx-2 mt-4 gap-4">
                <div class = "w-full bg-gray-100 flex justify-center">
                    <a href="#" class = "flex flex-col items-center">
                        <div class = "text-center absolute text-white px-4 py-2 z-10">
                            <Mday/>
                        </div>
                        <img src={MdayMD} alt="" class = "z-0 h-screen"/>
                    </a>
                </div>

                <div class="w-full bg-gray-100 flex justify-center">
                    <a href="#" class="flex flex-col items-center">
                        <div class="text-center absolute text-white px-4 py-2 z-10">
                            <Macbook />
                        </div>
                        <img src={macPic} alt="" class="z-0 h-screen" />
                    </a>
                </div>

                <div class = "w-full bg-gray-100 flex justify-center">
                    <a href="#" class = "flex flex-col items-center">
                        <div class = "text-center absolute text-white px-4 py-2 z-10">
                            <MacDoesThat/>
                        </div>
                        <img src={macDo} alt="Mac Does That" class = "z-0" />
                    </a>
                </div>

                <div class = "w-full bg-gray-100 flex justify-center">
                    <a href="#" class = "flex flex-col items-center">
                        <div class = "text-center absolute text-white px-4 py-2 z-10">
                            <Trade/>
                        </div>
                        <img src={tradePic} alt="" class = "z-0 w-screen"/>
                    </a>
                </div>

                <div class = "w-full bg-gray-100 flex justify-center">
                    <a href="#" class = "flex flex-col items-center">
                        <div class = "text-center absolute text-white px-4 py-2 z-10">
                            <Deals/>
                        </div>
                        <img src={promoPic} alt="" class = "z-0"/>
                    </a>
                </div>

                <div class = "w-full bg-gray-100 flex justify-center">
                    <a href="#" class = "flex flex-col items-center">
                        <div class = "text-center absolute text-white px-4 py-2 z-10">
                            <Card/>
                        </div>
                        <img src={cardPic} alt="" class = "z-0 w-screen"/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Gridsection