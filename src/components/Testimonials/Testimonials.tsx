import './Testimonials.css'
import TestimonialItem from "./TestimonialItem.tsx";
import Slider, {CarouselItem} from "../Slider/Slider.tsx";
export interface Slide {
    id: string;
    title: string;
    quote: string;
    user: string;
    linkName: string;
    linkUrl: string;
    image: string;
  }
const Testimonials = () => {
    const items: CarouselItem[] = [
        {
            id:'1',
            component: <TestimonialItem
                title={'People are talking'}
                quote={"Love this shirt! Fits perfectly and the fabric is thick without \nbeing stiff."}
                user={"JonSnSF"}
                linkName={"The Heavyweight Overshirt"}
                linkUrl={"#"}
                image={"/favoriteImage/image.png"}
            />
        },
        {
            id:'2',
            component: <TestimonialItem
                title={'People are talking 2'}
                quote={"Love this shirt! Fits perfectly and the fabric is thick without \nbeing stiff."}
                user={"JonSnSF"}
                linkName={"The Heavyweight Overshirt"}
                linkUrl={"#"}
                image={"/favoriteImage/image.png"}
            />
        },
        {
            id:'3',
            component: <TestimonialItem
                title={'People are talking 3'}
                quote={"Love this shirt! Fits perfectly and the fabric is thick without \nbeing stiff."}
                user={"JonSnSF"}
                linkName={"The Heavyweight Overshirt"}
                linkUrl={"#"}
                image={"/favoriteImage/image.png"}
            />
        }
    ]
    return (
        <div className="container">
            <div className="px-[17px] ">
                <Slider items={items} numberItemsDesktop={1} numberItemsTablet={1} numberItemsMobile={1} />
            </div>
            
        </div>
    );
}
export default Testimonials;