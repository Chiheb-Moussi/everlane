import {Rating} from "react-simple-star-rating";
interface TestimonialItemProps {
    title: string;
    quote: string;
    user: string;
    linkName: string;
    linkUrl: string;
    image: string;
}
const TestimonialItem = ({title, quote, user, linkName, linkUrl, image}:TestimonialItemProps) => {
    return (
        <div className="flex gap-18.5 justify-between px-18.5 items-center">
            <div className="w-full px-[62px] flex flex-col gap-[40px] justify-between">
                <div className="text-balck text-base font-normal font-['Maison Neue']">{title}</div>
                <div className="flex flex-col gap-[15px]">
                    <Rating size={14} initialValue={5} fillColor="black" disableFillHover allowHover={false}/>
                    <p className="text-2xl font-normal ">“{quote}”</p>
                </div>
                <div className="text-sm">
                    -- {user}, <a href={linkUrl}>{linkName}</a>
                </div>
            </div>
            <div className="w-full">
                <img src={image} className="w-full h-[695px]"/>
            </div>
        </div>
    )
}

export default TestimonialItem