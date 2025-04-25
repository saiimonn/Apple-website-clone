

function Region() {
    return(
        <header class = "flex flex-row justify-evenly px-60 py-4 bg-gray-100 w-full h-18 gap-6">
            <div class = "w-1/2 px-4">
                <p class = "text-xs font-light">Choose another country or region to see content specific to your location and shop online.</p>
            </div>
            <div class = "flex flex-row justify-evenly gap-4 w-1/2 items-center">

                <button class = "w-4/6 border-0 bg-white rounded-md text-left px-2 h-10">

                    <div class ="flex flex-row justify-between">
                        <div class = "gap-2 flex flex-row">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            <p class = "text-md font-light">Philippines</p>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </button>

                <button class = "w-1/5 border-0 bg-black rounded-lg text-center px-2 text-white h-10">
                    <p class = "text-sm font-light">Continue</p>
                </button>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </div>
        </header>
    );
}

export default Region