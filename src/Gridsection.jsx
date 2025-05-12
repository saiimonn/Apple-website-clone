import MdayMD from './assets/GridImages/MothersDayMD.png'
import macPic from './assets/GridImages/MacbookMD.jpg';
import macDo from './assets/GridImages/MacDoMD.jpg';
import tradePic from './assets/GridImages/TradeIn.jpg';
import promoPic from './assets/GridImages/PromoMD.jpg';
import cardPic from './assets/GridImages/Card.jpg';

import Macbook from './Grid Components/MacbookAir.jsx';
import MacDoesThat from './Grid Components/MacDoesThat.jsx';
import Trade from './Grid Components/Trade.jsx';
import Deals from './Grid Components/CarrierDeals.jsx';
import Card from './Grid Components/Card.jsx';
import Mday from './Grid Components/MothersDay.jsx';

function Gridsection() {
    return(
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mx-3 max-w-screen-2xl my-3 sm:my-4 lg:my-6">
                <div className="w-full bg-gray-100 overflow-hidden relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
                    <a href="#" className="block relative h-full">
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <Mday/>
                        </div>
                        <img src={MdayMD} alt="Mother's Day" className="w-full h-full object-cover object-center" />
                    </a>
                </div>

                <div className="w-full bg-gray-100 overflow-hidden relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
                    <a href="#" className="block relative h-full">
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <Macbook />
                        </div>
                        <img src={macPic} alt="MacBook Air" className="w-full h-full object-cover object-center" />
                    </a>
                </div>

                <div className="w-full bg-gray-100 overflow-hidden relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
                    <a href="#" className="block relative h-full">
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <MacDoesThat/>
                        </div>
                        <img src={macDo} alt="Mac Does That" className="w-full h-full object-cover object-center" />
                    </a>
                </div>

                <div className="w-full bg-gray-100 overflow-hidden relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
                    <a href="#" className="block relative h-full">
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <Trade/>
                        </div>
                        <img src={tradePic} alt="Trade In" className="w-full h-full object-cover object-center" />
                    </a>
                </div>

                <div className="w-full bg-gray-100 overflow-hidden relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
                    <a href="#" className="block relative h-full">
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <Deals/>
                        </div>
                        <img src={promoPic} alt="Carrier Deals" className="w-full h-full object-cover object-center" />
                    </a>
                </div>

                <div className="w-full bg-gray-100 overflow-hidden relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
                    <a href="#" className="block relative h-full">
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <Card/>
                        </div>
                        <img src={cardPic} alt="Apple Card" className="w-full h-full object-cover object-center" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Gridsection