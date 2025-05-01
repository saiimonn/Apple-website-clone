import MdayMD from './assets/MothersDayMD.png';
import macPic from './assets/MacbookMD.jpg';
import macDo from './assets/MacDoMD.jpg';
import tradePic from './assets/TradeIn.jpg';
import promoPic from './assets/PromoMD.jpg';
import cardPic from './assets/Card.jpg';

import Macbook from './Grid Components/MacbookAir.jsx';
import MacDoesThat from './Grid Components/MacDoesThat.jsx';
import Trade from './Grid Components/Trade.jsx';

function Gridsection() {
    return(
        <>
            <div class = "grid grid-cols-2 mx-2 mt-4 gap-4">
                <div class = "w-full bg-gray-100">
                    <a href="#">
                        <img src={MdayMD} alt="" />
                    </a>
                </div>

                <div class="w-full bg-gray-100 flex justify-center">
                    <a href="#" class="flex flex-col items-center">
                        <div class="text-center absolute text-white px-4 py-2 z-10">
                            <Macbook />
                        </div>
                        <img src={macPic} alt="" class="z-0" />
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
                            {/* Carrier Deals jpx */}
                        </div>
                        <img src={promoPic} alt="" class = "z-0"/>
                    </a>
                </div>

                <div class = "w-full bg-gray-100 flex justify-center">
                    <a href="#" class = "flex flex-col items-center">
                        <div class = "text-center absolute text-white px-4 py-2 z-10">
                            {/*  */}
                        </div>
                        <img src={cardPic} alt="" class = "z-0 w-screen"/>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Gridsection