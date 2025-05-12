import { useState } from 'react';
import {upperHalf} from './data/FooterContent.jsx';
import {firstCol, secondCol, thirdCol, fourthCol, fifthCol} from './data/FooterContent.jsx';

// Accordion component for mobile view
function AccordionSection({ section, isOpen, toggle }) {
    return (
        <div className="border-b border-gray-200 py-2">
            <button 
                onClick={toggle}
                className="flex justify-between items-center w-full text-left py-2"
            >
                <h4 className="text-xs font-medium">{section.title}</h4>
                <span className="transform transition-transform duration-300">
                    {isOpen ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 15l-6-6-6 6"/>
                        </svg>
                    : 
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6"/>
                        </svg>
                    }
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-2 py-2">
                    {section.contents.map((item, i) => (
                        <li key={i} className="text-xs text-gray-700 hover:underline cursor-pointer mb-2">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function Footer() {
    // State for each accordion section
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (sectionId) => {
        setOpenSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    return(
        <>
            <div className="w-full h-auto bg-gray-100 mt-16 px-4 sm:px-6 md:px-12 lg:px-55 py-4">
                <div id="upperHalf" className="text-[11px] sm:text-[12px] text-neutral-500 flex flex-col gap-3 sm:gap-4 font-light mb-4 sm:mb-6">
                    {upperHalf.map((item, idx) => (
                        <p key={idx} className="text-[11px] sm:text-[12px]">
                            {item.text}
                        </p>
                    ))}
                </div>

                <hr className="text-neutral-300"/>

                {/* Mobile Accordion View */}
                <div className="md:hidden mt-4">
                    {[...firstCol, ...secondCol, ...thirdCol, ...fourthCol, ...fifthCol].map((section, idx) => (
                        <AccordionSection 
                            key={idx}
                            section={section}
                            isOpen={openSections[idx] || false}
                            toggle={() => toggleSection(idx)}
                        />
                    ))}
                </div>

                {/* Desktop Columns View */}
                <div className="hidden md:flex flex-nowrap text-xs font-light mt-4">
                    <div className="basis-1/5 text-xs">
                    {firstCol.map((section, idx) => (
                            <div key={idx}>
                                <h4 className="font-medium mb-2">{section.title}</h4>
                                <ul className="space-y-2 mb-4 me-[20px]">
                                {section.contents.map((item, i) => (
                                    <li key={i} className="text-gray-700 hover:underline cursor-pointer mb-2">
                                    {item}
                                    </li>
                                ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="basis-1/5 text-xs">
                        {secondCol.map((section, idx) => (
                            <div key={idx}>
                                <h4 className="font-medium mb-2">{section.title}</h4>
                                <ul className="space-y-2 mb-4 me-[20px]">
                                    {section.contents.map((item, i) =>(
                                        <li key={i} className="text-gray-700 hover:underline cursor-pointer mb-2">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="basis-1/5 text-xs">
                        {thirdCol.map((section, idx) => (
                            <div key={idx}>
                                <h4 className="font-medium mb-2">{section.title}</h4>
                                <ul className="space-y-2 mb-4 me-[20px]">
                                    {section.contents.map((item, i) => (
                                        <li key={i} className="text-gray-700 hover:underline cursor-pointer mb-2">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="basis-1/5 text-xs">
                        {fourthCol.map((section, idx) => (
                            <div key={idx}>
                                <h4 className="font-medium mb-2">{section.title}</h4>
                                <ul className="space-y-2 mb-4 me-[20px]">
                                    {section.contents.map((item, i) => (
                                        <li key={i} className="text-gray-700 hover:underline cursor-pointer mb-2">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="basis-1/5 text-xs">
                        {fifthCol.map((section, idx) => (
                            <div key={idx}>
                                <h4 className="font-medium mb-2">{section.title}</h4>
                                <ul className="space-y-2 mb-4 me-[20px]">
                                    {section.contents.map((item, i) => (
                                        <li key={i} className="text-gray-700 hover:underline cursor-pointer mb-2">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="mt-4 mb-6 text-[11px] sm:text-xs font-light text-neutral-500">
                    More ways to shop: <span className="text-blue-700 underline cursor-pointer">Find an Apple Store</span> or 
                    <span className="text-blue-700 underline cursor-pointer"> other retailer</span> near you.
                     Or call <span className="text-blue-700 underline cursor-pointer">1-800-MY-APPLE</span> (1-800-692-7753).
                </p>

                <hr className="text-neutral-300" />

                <div className="flex flex-col md:flex-row justify-between text-[11px] sm:text-xs font-light mt-4 gap-4 md:gap-0">
                    <h1 className="text-gray-500">Copyright © 2025 Apple Inc. All rights reserved.</h1>

                    <div className="flex flex-wrap gap-y-2 md:space-x-2 md:flex-row">
                        <p className="hover:underline cursor-pointer mr-2 md:mr-0">Privacy Policy</p>
                        <span className="hidden md:inline">|</span>
                        
                        <p className="hover:underline cursor-pointer mr-2 md:mr-0">Terms of Use</p>
                        <span className="hidden md:inline">|</span>
                        
                        <p className="hover:underline cursor-pointer mr-2 md:mr-0">Sales and Refunds</p>
                        <span className="hidden md:inline">|</span>
                          
                        <p className="hover:underline cursor-pointer mr-2 md:mr-0">Legal</p>
                        <span className="hidden md:inline">|</span>
                         
                        <p className="hover:underline cursor-pointer">Site Map</p>
                    </div>
                    
                    <p className="hover:underline cursor-pointer text-gray-800">United States</p>
                </div>
            </div>
        </>
    );
}