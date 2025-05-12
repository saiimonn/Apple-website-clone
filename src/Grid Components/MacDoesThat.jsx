function MacDoesThat() {
    return(
        <>
            <div className="flex flex-col justify-between h-full w-full text-black px-4 py-6 sm:py-8 md:py-10 text-center">
                <div className="pt-4 sm:pt-6 md:pt-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Mac does <span style={{backgroundColor: "#78FA4E"}}>that.</span></h1>
                    <p className="text-sm md:text-lg lg:text-xl font-light mt-1 sm:mt-2">See how easy it is to switch to Mac.</p>
                    <button className="bg-blue-600 rounded-full py-1 md:py-2 px-3 md:px-4 text-white text-xs md:text-sm font-light mx-auto mt-3 sm:mt-4">Learn more</button>
                </div>
                <div></div>
            </div>
        </>
    );
}

export default MacDoesThat