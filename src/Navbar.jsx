import { useState } from 'react';

function Navbar({ showRegionHeader, setRegionHeader}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return(
        <div className="flex flex-col z-50 fixed w-full top-0 left-0">
            {showRegionHeader && (
                <header className="flex flex-col sm:flex-row justify-between bg-gray-100 w-full items-center px-4 sm:px-8 py-3">
                    <div className="w-full sm:w-1/2 px-2 sm:px-4 text-center sm:text-left mb-3 sm:mb-0">
                        <p className="text-xs font-light">Choose another country or region to see content specific to your location and shop online.</p>
                    </div>
                    <div className="flex flex-row justify-center sm:justify-end gap-2 sm:gap-4 w-full sm:w-1/2 items-center">
                        <button className="flex-grow sm:flex-grow-0 border-0 bg-white rounded-md text-left px-2 h-10">
                            <div className="flex flex-row justify-between">
                                <div className="gap-2 flex flex-row">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    <p className="text-sm font-light">Philippines</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                        <button className="bg-black rounded-lg text-center px-3 py-1 text-white h-10">
                            <p className="text-xs sm:text-sm font-light">Continue</p>
                        </button>
                        <button onClick={() => setRegionHeader(false)} className="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </header>
            )}

            <div className="bg-white border-b border-gray-200 w-full">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between r h-12">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <a href="#" className="text-md">
                                    
                                </a>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-6">
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">Store</a>
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">Mac</a>
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">Ipad</a>
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">Iphone</a>
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">Watch</a>
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">Vision</a>
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">AirPods</a>
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">TV & Home</a>
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">Entertainment</a>
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">Accessories</a>
                            <a href="#" className="text-xs text-gray-900 hover:text-gray-600 font-extralight">Support</a>
                        </div>

                        <div className="flex items-center">
                            <a href="#" className="text-gray-900 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-900 p-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </a>
                            
                            <div className="md:hidden ml-2">
                                <button 
                                    type="button"
                                    className="text-gray-900 p-1 focus:outline-none"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Mobile menu dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute right-0 top-12 w-48 bg-white shadow-lg rounded-b-md z-50">
                        <div className="py-1">
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">Store</a>
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">Mac</a>
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">Ipad</a>
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">Iphone</a>
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">Watch</a>
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">Vision</a>
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">AirPods</a>
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">TV & Home</a>
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">Entertainment</a>
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">Accessories</a>
                            <a href="#" className="block px-4 py-2 text-xs text-gray-900 hover:bg-gray-100">Support</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar