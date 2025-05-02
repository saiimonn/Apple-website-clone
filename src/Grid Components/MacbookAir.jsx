

function MacbookAir() {
    return(
        <>
            <div class = "flex flex-col pt-[51px] text-black gap-1">
                <div class="text-4xl font-semibold">MacBook Air</div>
                <div class="text-lg">
                    <p class = "text-xl font-light">Sky blue color.</p>
                    <p class = "text-xl font-light">Sky high performance with M4.</p>

                    <div class = "flex gap-3 justify-center mt-3">
                        <button class = "bg-blue-600 rounded-full px-4 py-2 text-white font-light text-sm">Learn more</button>
                        <button class = "border border-blue-600 rounded-full px-5 py-2 text-sm font-light text-blue-500">Buy</button>
                    </div>
                </div>

                <p class = "mt-[450px] mb-4 text-sm font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Built for Apple Intelligence.</p>
            </div>
        </>
    );
}

export default MacbookAir