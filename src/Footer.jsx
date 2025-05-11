import {upperHalf} from './data/FooterContent.jsx';
import {firstCol, secondCol, thirdCol, fourthCol, fifthCol} from './data/FooterContent.jsx';


export default function footer() {
    return(
        <>
            <div className = "w-full h-auto bg-gray-100 mt-16 px-55 py-4">
                <div id = "upperHalf" className = "text-[12px] text-neutral-500 flex flex-col gap-4 font-light mb-6">
                    {upperHalf.map((item, idx) => (
                        <p key = {idx}>
                            {item.text}
                        </p>
                    ))}
                </div>

                <hr className = "text-neutral-300"/>

                <div className = "flex flex-nowrap text-xs font-light mt-4">

                    <div className = "basis-1/4 text-xs">
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

                    <div className = "basis-1/4 text-xs">
                        {secondCol.map((section, idx) => (
                            <div key = {idx}>
                                <h4 className = "font-medium mb-2">{section.title}</h4>
                                <ul className = "space-y-2 mb-4 me-[20px]">
                                    {section.contents.map((item, i) =>(
                                        <li key = {i} className = "text-gray-700 hover:unerline cursor-pointer mb-2">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className = "basis-1/4 text-xs">
                        {thirdCol.map((section, idx) => (
                            <div key = {idx}>
                                <h4 className = "font-medium mb-2">{section.title}</h4>
                                <ul className = "space-y-2 mb-4 me-[20px]">
                                    {section.contents.map((item, i) => (
                                        <li key = {i} className = "text-gray-700 hover:underline cursor-pointer mb-2">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className = "basis-1/4 text-xs">
                        {fourthCol.map((section, idx) => (
                            <div key = {idx}>
                                <h4 className = "font-medium mb-2">{section.title}</h4>
                                <ul className = "space-y-2 mb-4 me-[20px]">
                                    {section.contents.map((item, i) => (
                                        <li key = {i} className = "text-gray-700 hover:underline cursor-pointer mb-2">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className = "basis-1/4 text-xs">
                        {fifthCol.map((section, idx) => (
                            <div key = {idx}>
                                <h4 className = "font-medium mb-2">{section.title}</h4>
                                <ul className = "space-y-2 mb-4 me-[20px]">
                                    {section.contents.map((item, i) => (
                                        <li key = {i} className = "text-gray-700 hover:underline cursor-pointer mb-2">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>

                <p className = "mt-4 mb-6 text-xs font-light text-neutral-500">
                    More ways to shop: <span className = "text-blue-700 underline cursor-pointer">Find an Apple Store</span> or 
                    <span className = "text-blue-700 underline cursor-pointer"> other retailer</span> near you.
                     Or call <span className = "text-blue-700 underline cursor-pointer">1-800-MY-APPLE</span> (1-800-692-7753).
                </p>

                <hr className = "text-neutral-300" />

                <div className = "flex flex-row justify-between text-xs font-light mt-4">
                    <h1 className = "text-gray-500">Copyright © 2025 Apple Inc. All rights reserved.</h1>

                    <div className = "space-x-2 flex flex-row">
                        <p className = "hover:underline cursor-pointer">   Privacy Policy |</p>
                        
                        <p className = "hover:underline cursor-pointer"> Terms of Use | </p>
                        
                        <p className = "hover:underline cursor-pointer"> Sales and Refunds |</p>
                          
                        <p className = "hover:underline cursor-pointer"> Legal | </p>
                         
                        <p className = "hover:underline cursor-pointer"> Site Map </p>
                    </div>
                    
                    <p className = "hover:underline cursor-pointer text-gray-800">United States</p>
                </div>
            </div>
        </>
    );
}