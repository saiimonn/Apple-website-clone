function MacbookAir() {
    return(
        <>
            <div className="flex flex-col justify-between h-full w-full text-black px-4 py-6 sm:py-8 md:py-10 text-center">
                <div className="pt-4 sm:pt-6 md:pt-8">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">MacBook Air</div>
                    <div className="mt-1 sm:mt-2">
                        <p className="text-base md:text-lg lg:text-xl font-light">Sky blue color.</p>
                        <p className="text-base md:text-lg lg:text-xl font-light">Sky high performance with M4.</p>
                    </div>

                    <div className="flex gap-2 md:gap-3 justify-center mt-3 sm:mt-4">
                        <button className="bg-blue-600 rounded-full px-3 md:px-4 py-1 md:py-2 text-white font-light text-xs md:text-sm">Learn more</button>
                        <button className="border border-blue-600 rounded-full px-3 md:px-5 py-1 md:py-2 text-xs md:text-sm font-light text-blue-500">Buy</button>
                    </div>
                </div>

                <p className="text-xs md:text-sm font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent pb-4 sm:pb-6">Built for Apple Intelligence.</p>
            </div>
        </>
    );
}

export default MacbookAir