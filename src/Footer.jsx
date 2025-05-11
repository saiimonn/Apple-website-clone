import {upperHalf} from './data/FooterContent.jsx';


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
                    <div className = "basis-[25%]">
                        
                    </div>

                    <div className = "basis-[25%]">

                    </div>

                    <div className = "basis-[25%]">

                    </div>

                    <div className = "basis-[25%]">

                    </div>

                    <div className = "basis-[25%]">

                    </div>
                </div>
            </div>
        </>
    );
}