import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";

const TopHeader = () => {
  const [backgroundColor, setBackgroundColor] = useState("black");

  const getRandomColor = () => {
    const colors = ["red", "blue", "green", "yellow"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    console.log("Random Color:", randomColor);
    return randomColor;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = getRandomColor();
      setBackgroundColor(randomColor);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const containerStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <div
      className="w-full h-7 px-7 py-1.5 justify-between items-center inline-flex"
      style={containerStyle}
    >
      <div className="grow shrink basis-0 h-4 justify-between sm:justify-center items-center flex">
        <div className="sm:text-center  text-white text-xs font-semibold font-maison-neue leading-none tracking-tight pr-2">
          Get early access on launches and offers.
        </div>
        <div className="hidden sm:flex text-center text-white text-xs font-normal font-maison-neue underline leading-none tracking-tight">
          Sign Up For Texts
        </div>
      </div>
      <div className="justify-start items-center gap-3 flex">
        <div className="w-5 h-3.5 left-0 top-0 absolute"></div>
      </div>
      <select
        id=""
        className="w-[70px] text-xs font-normal font-maison-neue leading-none tracking-tight"
      >
        <option style={containerStyle} className=" w-full flex">
       
            <ReactCountryFlag countryCode="US" />
            <div> &nbsp;&nbsp;&nbsp;</div>
            <span className="">USD</span>
         
        </option>
        <option style={containerStyle} className=" w-full flex">
      
          <ReactCountryFlag countryCode="EU" />
            <div> &nbsp;&nbsp;&nbsp;</div>
            <span className="">EUR</span>
        
        </option>
      </select>
    </div>
  );
};

export default TopHeader;
