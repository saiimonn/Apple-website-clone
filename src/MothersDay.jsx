import MdayPic from './assets/MothersDay.jpg';

function MothersDay() {
    return(
        <>
            <div class = "bg-gray-100 w-full h-145 overflow-hidden flex items-end justify-center mt-3">
                <div class = "absolute pb-[61px] flex flex-col items-center gap-3 overflow-hidden">
                    <h1 class = "text-6xl font-semibold">Mother's Day</h1>
                    <p class = "text-3xl font-light">Find the perfect gift for Mom.</p>
                    <button class = "px-6 py-3 bg-blue-500 text-white rounded-full font-light">Shop</button>
                </div>
                <img src={MdayPic} alt="" class = " object-fill"/>
            </div>
        </>
    );
}

export default MothersDay