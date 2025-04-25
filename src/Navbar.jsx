
function Navbar() {
    return(
        <div class = "flex flex-col z-100 fixed">
            <header class = "flex flex-row justify-evenly px-60 py-4 bg-gray-100 w-full h-18 gap-6 items-center">
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

                    <button class = "cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>

                </div>
            </header>

            <div class = "flex flex-row w-screen px-55 bg-white">
                <nav class = "px-4 py-2 flex flex-row font-light gap-8 items-center">
                    <div href="#" class = "text-md"></div>
                    <div class = "flex flex-row justify-evenly gap-8 items-center">
                        <a href="#" class = "text-xs">Store</a>
                        <a href="#" class = "text-xs">Mac</a>
                        <a href="#" class = "text-xs">Ipad</a>
                        <a href="#" class = "text-xs">Iphone</a>
                        <a href="#" class = "text-xs">Watch</a>
                        <a href="#" class = "text-xs">Vision</a>
                        <a href="#" class = "text-xs">AirPods</a>
                        <a href="#" class = "text-xs">TV & Home</a>
                        <a href="#" class = "text-xs">Entertainment</a>
                        <a href="#" class = "text-xs">Accessories</a>
                        <a href="#" class = "text-xs">Support</a>
                        <a href="#" class = "text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </a>
                        <a href="#" class = "text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar