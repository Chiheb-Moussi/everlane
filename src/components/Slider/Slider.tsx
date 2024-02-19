import Carousel from "react-multi-carousel";
import {ReactElement} from "react";
import "react-multi-carousel/lib/styles.css";


export interface CarouselItem {
    id: string;
    component:  ReactElement;
}

interface SliderProps {
    items: CarouselItem[],
    numberItemsDesktop?: number;
    numberItemsTablet?: number;
    numberItemsMobile?: number;
}

const Slider = ({items, numberItemsDesktop=5, numberItemsTablet=2, numberItemsMobile=1}:SliderProps) => {



    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: numberItemsDesktop,
            className: 'object-cover'
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: numberItemsTablet
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: numberItemsMobile,

        }
    };
    return (
        <Carousel
            responsive={responsive}
            renderButtonGroupOutside
            className=" relative pb-10"
            arrows={true}
            draggable={true}
            showDots
            removeArrowOnDeviceType={['mobile', 'tablet']}
        >
            {items.map(item => <div key={item.id}>{item.component}</div>)}
        </Carousel>

    );
}

export default Slider;