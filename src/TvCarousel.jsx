import {useState} from "react";
import Baseball from './TV-Carousel-Components/Baseball.jsx';
import Careme from './TV-Carousel-Components/Careme.jsx';
import DopeThief from './TV-Carousel-Components/DopeThief.jsx';
import FriendNeighbor from './TV-Carousel-Components/FriendNeighbor.jsx';
import GovCheese from './TV-Carousel-Components/GovCheese.jsx';
import Season from './TV-Carousel-Components/SeasonPass.jsx';
import Severance from './TV-Carousel-Components/Severance.jsx';
import Shrink from './TV-Carousel-Components/Shrink.jsx';
import Ted from './TV-Carousel-Components/TedLasso.jsx';
import Studio from './TV-Carousel-Components/TheStudio.jsx';


const realSlides = [
    <Season/>,
    <FriendNeighbor/>,
    <Studio/>,
    <Careme/>,
    <Severance/>,
    <DopeThief/>,
    <Ted/>,
    <Baseball/>,
    <GovCheese/>,
    <Shrink/>
]

const slides = [realSlides[realSlides.length - 1], ...realSlides, realSlides[0]];

export default function TVCarousel() {
    // const [current, setCurrent] = useState(1);
    // const [isTransitioning, setIsTransitioning] = useState(true);

    // const nextSlide = () => {
    //     setCurrent((prev) => prev + 1);
    // };

    // const prevSlide = () => {
    //     setCurrent((prev) => prev - 1);
    // };

    // useEffect(() => {
    //     if(!isTransitioning) return;

    //     const timeout = setTimeout(() => {
    //         if(current === slides.length - 1) {
    //             setIsTransitioning(false);
    //             setCurrent(1);
    //         } else if (current === 0) {
    //             setIsTransitioning(false);
    //             setCurrent(slides.length - 2);
    //         }
    //     }, 500);
    //     return () => clearTimeout(timeout);
    // }, [current]);

    return(
        <>
            <Studio/>
        </>
    );
}