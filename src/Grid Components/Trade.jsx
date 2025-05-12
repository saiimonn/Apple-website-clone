function Tradein() {
    return(
        <>
            <div className="flex flex-col justify-between h-full w-full text-black px-4 py-6 sm:py-8 md:py-10 text-center">
                <div className="pt-4 sm:pt-6 md:pt-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">Trade In</h1>
                    <p className="text-sm md:text-lg lg:text-xl font-light mt-1 sm:mt-2">
                        Get $170-$630 in credit when you <br className="hidden sm:block" />
                        trade in iPhone 12 or higher.
                    </p>
                    <button className="mt-3 sm:mt-4 bg-blue-500 text-white text-xs md:text-sm font-light px-3 md:px-4 py-1 md:py-2 rounded-full mx-auto">Get your estimate</button>
                </div>
                <div></div>
            </div>
        </>
    );
}

export default Tradein