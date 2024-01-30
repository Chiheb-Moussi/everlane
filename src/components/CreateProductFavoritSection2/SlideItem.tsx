import { Slide } from "./FavoriteCarusel2";

<<<<<<< HEAD
const SlideItem = ({
=======
const SlideItem1 = ({
>>>>>>> origin/EC-17
    title,
    quote,
    user,
    linkName,
    linkUrl,
    image,
  }: Slide) => {
    return (
      <div className="md:flex md:justify-center md:items-center w-full md:gap-8">
        <div className="md:flex md:flex-col md:gap-10">
          <div className="order-1 md:order-1">
            <p>{title}</p>
          </div>
          <div className="md:flex md:flex-col md:gap-4 order-2 md:order-3"> {/* Änderung der Reihenfolge */}
            <p className="font-bold font-[Maison Neue] text-2xl">{quote}</p>
            <span>
              {user} <a className="underline" href={linkUrl}>{linkName}</a>
            </span>
          </div>
        </div>
        <div className="order-2 md:w-[50vw] md:order-3"> {/* Änderung der Reihenfolge */}
          <img src={image} className="w-full h-96" alt="" />
        </div>
      </div>
    );
  };
  
<<<<<<< HEAD
  export default SlideItem;
=======
  export default SlideItem1;
>>>>>>> origin/EC-17
