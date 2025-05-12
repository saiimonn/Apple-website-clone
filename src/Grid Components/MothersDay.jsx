function Mday() {
    return(
        <>
            <div className="flex flex-col justify-between h-full w-full text-black px-4 py-6 sm:py-8 md:py-10 text-center">
                <div></div>
                <div className="pb-4 sm:pb-6 md:pb-8">
                    <h3 className="text-black text-2xl md:text-3xl lg:text-4xl font-medium">Mother's Day</h3>
                    <p className="text-black text-sm md:text-lg lg:text-xl font-light mt-1 sm:mt-2">Find the perfect gift for Mom.</p>
                    <button className="bg-blue-500 rounded-full py-1 md:py-2 px-4 md:px-6 self-center h-auto text-xs md:text-sm font-light text-center mt-3 sm:mt-4 text-white">Shop</button>
                </div>
            </div>
        </>
    );
}

export default Mday