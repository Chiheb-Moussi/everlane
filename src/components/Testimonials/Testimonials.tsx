import { Rating } from "react-simple-star-rating";
import './Testimonials.css'
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
    const slides: Slide[] = [
        {
          id: '1',
          title: 'People are talking',
          quote: "Love this shirt! Fits perfectly and the fabric is thick without \nbeing stiff.",
          user: "JonSnSF",
          linkName: "The Heavyweight Overshirt",
          linkUrl: "",
          image: "/favoriteImage/image.png"
        },
        {
          id: '2',
          title: 'People are talking',
          quote: "Love this shirt! Fits perfectly and the fabric is thick without \nbeing stiff.",
          user: "JonSnSF",
          linkName: "The Heavyweight Overshirt",
          linkUrl: "",
          image: "/favoriteImage/image.png"
        },
        {
          id: '3',
          title: 'People are talking',
          quote: "Love this shirt! Fits perfectly and the fabric is thick without \nbeing stiff.",
          user: "JonSnSF",
          linkName: "The Heavyweight Overshirt",
          linkUrl: "",
          image: "/favoriteImage/image.png"
        }
      ]
    return (
        <div className="container">
            <div className="px-[17px] ">
                <div className="flex gap-18.5 justify-between px-18.5 items-center">
                    <div className="w-full px-[62px] flex flex-col gap-[40px] justify-between">
                        <div className="text-balck text-base font-normal font-['Maison Neue']">People Are Talking</div>
                        <div className="flex flex-col gap-[15px]">
                            <Rating size={14} initialValue={5} fillColor="black" disableFillHover allowHover={false}/>
                            <p className="text-2xl font-normal ">“Love this shirt! Fits perfectly and <br/> the fabric is thick without <br/> being stiff.”</p>
                        </div>
                        <div className="text-sm">
                        -- JonSnSF, <a href="/">The Heavyweight Overshirt</a>
                        </div>
                    </div>
                    <div className="w-full">
                        <img src="/favoriteImage/image.png" className="w-full h-[695px]" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Testimonials;