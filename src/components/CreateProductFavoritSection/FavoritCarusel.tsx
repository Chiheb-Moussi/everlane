import { useState } from "react";

type Props = {
  slides: {
    content: JSX.Element;
  }[];
};

const FavoritCarusel = ({ slides }: Props) => {
  const [current] = useState(0);
  const [caruselIndex, setCaruselIndex] = useState(2);

  const handleCaruselIndex = (operand: string) => {
    if (operand === "+") {
      if (caruselIndex === slides.length - 1) {
        setCaruselIndex(0);
      } else {
        setCaruselIndex(caruselIndex + 1);
      }
    } else if (operand === "-") {
      if (caruselIndex === 0) {
        setCaruselIndex(slides.length - 1);
      } else {
        setCaruselIndex(caruselIndex - 1);
      }
    }
  };

  return (
    <div>
      <div className="self-stretch mb-16 h-16 px-10 flex-col justify-start items-center gap-3 flex">
        <div className="self-stretch text-center text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
          Everlane Favorites
        </div>
        <div className="self-stretch text-center text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
        </div>
      </div>

      <div className="overflow-hidden relative ">
        <div
          className={`flex gap-4 justify-center px-10 ease-out duration-40 sm:gap-4 `}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides && slides.length > 0 ? (
            slides
              .slice(caruselIndex, caruselIndex + (window.innerWidth < 768 ? 1 : 3)) 
              .map((s, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                  {s.content}
                </div>
              ))
          ) : (
            <p>No slides available</p>
          )}
        </div>
        <div className="absolute flex z-10 top-0 h-full w-full justify-between items-center">
          <button onClick={() => handleCaruselIndex("-")}>
            <img src="/FavoriteSection/CaretLeft.svg" alt="" />
          </button>
          <button onClick={() => handleCaruselIndex("+")}>
            <img src="/FavoriteSection/CaretRight.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavoritCarusel;
