import { useState } from 'react';
import { IoIosStarOutline, IoIosStar } from 'react-icons/io';

interface TestimonialItemProps {
    title: string;
    quote: string;
    user: string;
    linkName: string;
    linkUrl: string;
    image: string;
}

const TestimonialItem = ({ title, quote, user, linkName, linkUrl, image }: TestimonialItemProps) => {
    const [clickedStars, setClickedStars] = useState(0);

    const handleStarClick = (index: number) => {
        setClickedStars(index + 1);
    };

    return (
        <div className="w-full flex flex-col px-12 gap-2 sm:flex-row lg:flex-row sm:px-11 lg:gap-18.5 justify-between lg:px-18.5 items-center">
            <div className="w-full lg:px-[62px] flex flex-col lg:gap-[40px] gap-4 justify-between">
                <div className="text-black text-base font-normal font-['Maison Neue']">{title}</div>
                <div className="sm:flex sm:flex-col sm:gap-[15px]">
                    <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} onClick={() => handleStarClick(index)}>
                                {index < clickedStars ? <IoIosStar color="yellow" /> : <IoIosStarOutline />}
                            </div>
                        ))}
                    </div>
                    <p className="sm:text-2xl text-sm font-normal">“{quote}”</p>
                </div>
            </div>
            <div className="w-full">
                <img src={image} className="w-full lg:h-[695px] object-cover" />
                <div className="w-full">
                    {user}, <a href={linkUrl}>{linkName}</a>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;
