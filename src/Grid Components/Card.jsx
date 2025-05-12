function Card() {
    return(
        <>
            <div className="flex flex-col justify-between h-full w-full text-black px-4 py-6 sm:py-8 md:py-10 text-center">
                <div className="pt-4 sm:pt-6 md:pt-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">Card</h1>
                    <p className="text-sm md:text-lg lg:text-xl font-light mt-1 sm:mt-2">
                        Get up to 3% Daily Cash back <br className="hidden sm:block" />
                        with every purchase.
                    </p>
                    <div className="flex gap-2 md:gap-3 justify-center mt-3 sm:mt-4">
                        <button className="bg-black text-white rounded-full px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm font-light">Learn more</button>
                        <button className="border border-black rounded-full px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm font-light">Apply now</button>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    );
}

export default Card