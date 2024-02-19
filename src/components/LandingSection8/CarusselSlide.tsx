import { useEffect, useState } from "react";
type ICarusselSlide = {
  id: string;
  image: string;
  class?: string;
};
const CarusselSlide = () => {
  const displayImage: ICarusselSlide[] = [
    {
      id: "2",
      image: "/Section8/Frame14.png",
    },
    {
      id: "3",
      image: "/Section8/Frame19.png",
    },
    {
      id: "4",
      image: "/Section8/Frame20.png",
    },
    {
      id: "5",
      image: "/Section8/Frame21.png",
    },
    {
      id: "6",
      image: "/Section8/Frame22.png",
    },
    {
      id: "7",
      image: "/Section8/Frame22.png",
    },
    {
      id: "8",
      image: "/Section8/Frame22.png",
    },
  ];
  const [carrosselPosition, setCarrosselPosition] = useState(0);
  const [carosselLength, setCarosselLength] = useState(5);
  const handleArrowClick = (direction: number) => {
    if (carrosselPosition + direction < 0) {
      setCarrosselPosition(0);
    } else if (
      carrosselPosition + direction + carosselLength >
      displayImage.length
    ) {
      setCarrosselPosition(displayImage.length - carosselLength);
    } else {
      setCarrosselPosition(carrosselPosition + direction);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCarosselLength(1);
      } else if (window.innerWidth < 768) {
        setCarosselLength(2);
      } else if (window.innerWidth < 1024) {
        setCarosselLength(3);
      } else if (window.innerWidth < 1280) {
        setCarosselLength(5);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="  flex flex-col items-center justify-center  ">
   <div className=" ">
        <p className="text-center py-5 font-maison-neue text-2xl  font-light leading-10">
          Everlane On You
        </p>
        <p className="py-1 font-maison-neue sm:text-base sm:font-normal leading-7 tracking-wider text-sm-center ">
          Share your latest look with #EverlaneOnYou for a chance to be
          featured.
        </p>
        <p className=" text-center underline py-3 ">Add Your Photo</p>
      </div>
      <div className=" flex items-center justify-between  ">
      <button onClick={() => handleArrowClick(-1)}  className="">
            <img src="/favoriteImage/CaretLeft.svg" alt="" className="slide " />
          </button>
        <div className="flex gap-[10px] items-center">
         
          {displayImage
            .slice(carrosselPosition, carrosselPosition + carosselLength)
            .map((i) => (
              <img key={i.id} src={i.image} alt="" className={`h-[225px] `} />
            ))}
          
        </div>
        <button onClick={() => handleArrowClick(1)}>
            <img src="/favoriteImage/CaretRight.svg" className="slide " />
          </button>
      </div>
    </div>
  );
};
export default CarusselSlide;