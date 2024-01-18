import Carousel from "react-multi-carousel";
import {ReactElement} from "react";
import "react-multi-carousel/lib/styles.css";


export interface CarouselItem {
    id: string;
    component:  ReactElement;
}

interface SliderProps {
    items: CarouselItem[]
}

const Slider = ({items}:SliderProps) => {



    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,

        }
    };
    return (
        <Carousel
            responsive={responsive}
            renderButtonGroupOutside
            className="container relative pb-10"
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