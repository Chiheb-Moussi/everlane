import { ISlide } from "./FavoritCarusel";

const SlideItem1 = ({
    title,
    linkName,  
    image,
    price
  }: ISlide) => {
    return (
   
          <div className="grow shrink basis-0 flex-col justify-start items-center gap-1.5 inline-flex">
            <img className="self-stretch h-96" src={image} />
            <div className="self-stretch h-9 flex-col justify-start items-start gap-0.5 flex">
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="grow shrink basis-0 text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">{title}</div>
                <div className="text-right text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">{price}</div>
              </div>
              <div className="self-stretch h-4 text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">{linkName}</div>
            </div>
          </div>
         
    );
  };
  
  export default SlideItem1;