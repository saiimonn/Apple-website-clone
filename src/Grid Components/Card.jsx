
function Card() {
    return(
        <>
            <div class = "flex flex-col pt-[51px] text-black gap-1">
                <h1 class = "text-4xl font-medium">Card</h1>
                <p class = "text-xl font-light">
                    Get up to 3% Daily Cash back <br />
                    with every purchase.
                </p>
                <div class = "flex gap-3 justify-center mt-3">
                    <button class = "bg-black text-white rounded-full px-3 py-2 text-sm font-light">Learn more</button>
                    <button class = "border-1 rounded-full px-3 py-2 text-sm font-light">Apply now</button>
                </div>
            </div>
        </>
    );
}

export default Card