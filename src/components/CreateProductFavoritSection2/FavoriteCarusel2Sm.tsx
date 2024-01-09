import { useState, useEffect } from "react";

type Props = {
  slider3: {
    content: JSX.Element;
  }[];
};

const FavoriteCarusel2Sm = ({ slider3 }: Props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Zufälligen Index generieren, der nicht dem aktuellen entspricht
      let randomIndex = currentSlideIndex;
      while (randomIndex === currentSlideIndex) {
        randomIndex = Math.floor(Math.random() * slider3.length);
      }
      setCurrentSlideIndex(randomIndex);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlideIndex, slider3.length]);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex ease-out duration-500 `}
        style={{
          transform: `translateX(-${currentSlideIndex * (100 / slider3.length)}%)`,
          width: `${slider3.length * 100}%`,
        }}
      >
        {slider3 && slider3.length > 0 ? (
          slider3.map((slide, index) => (
            <div
              key={index}
              className="w-full h-full sm:w-auto sm:h-auto "
            >
              {slide.content}
            </div>
          ))
        ) : (
          <p>No slides available</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteCarusel2Sm;
