function Deals() {
    return(
        <>
            <div className="flex flex-col justify-between h-full w-full text-black px-4 py-6 sm:py-8 md:py-10 text-center">
                <div></div>
                <div className="pb-4 sm:pb-6 md:pb-8">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">Carrier deals at Apple</h1>
                    <p className="text-sm md:text-lg lg:text-xl font-light mt-1 sm:mt-2">
                        Get up to $1000 in credit on a new iPhone. <br className="hidden sm:block" />
                        Trade-in may be required.
                    </p>
                    <button className="bg-blue-500 rounded-full px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-light text-white mt-3 sm:mt-4 mx-auto">Find your deal</button>
                </div>
            </div>
        </>
    );
}

export default Deals