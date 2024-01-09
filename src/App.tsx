// import FavoritCarusel from "./components/CreateProductFavoritSection/FavoritCarusel";
import FavoriteCarusel2 from "./components/CreateProductFavoritSection2/FavoriteCarusel2";
import { IoIosStar } from "react-icons/io";
import FavoriteCarusel2Sm from "./components/CreateProductFavoritSection2/FavoriteCarusel2Sm";
const App = () => {
  // const slides = [
  //   {
  //     content: (
  //       <div className=" flex flex-col items-center justify-center gap-2">
  //         <img
  //           className="w-72 h-96"
  //           src="/public/FavoriteSection/image.png"
  //           alt=""
  //         />
  //         <div className="w-60 text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           The Slim 4-Way Stretch Organic Jean | Uniform
  //         </div>
  //         <div className="w-72 h-4 text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           Toasted Coconut
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     content: (
  //       <div className=" flex flex-col items-center justify-center gap-2">
  //         <img
  //           className="w-72 h-96"
  //           src="/public/FavoriteSection/image1.png"
  //           alt=""
  //         />
  //         <div className="w-60 text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           The Slim 4-Way Stretch Organic Jean | Uniform
  //         </div>
  //         <div className="w-72 h-4 text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           Toasted Coconut
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     content: (
  //       <div className=" flex flex-col items-center justify-center gap-2">
  //         <img
  //           className="w-72 h-96"
  //           src="/public/FavoriteSection/image2.png"
  //           alt=""
  //         />
  //         <div className="w-60 text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           The Slim 4-Way Stretch Organic Jean | Uniform
  //         </div>
  //         <div className="w-72 h-4 text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           Toasted Coconut
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     content: (
  //       <div className=" flex flex-col items-center justify-center gap-2">
  //         <img
  //           className="w-72 h-96"
  //           src="/public/FavoriteSection/image3.png"
  //           alt=""
  //         />
  //         <div className="w-60 text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           The Slim 4-Way Stretch Organic Jean | Uniform
  //         </div>
  //         <div className="w-72 h-4 text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           Toasted Coconut
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     content: (
  //       <div className=" flex flex-col items-center justify-center gap-2">
  //         <img
  //           className="w-72 h-96"
  //           src="/public/FavoriteSection/image4.png"
  //           alt=""
  //         />
  //         <div className="w-60 text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           The Slim 4-Way Stretch Organic Jean | Uniform
  //         </div>
  //         <div className="w-72 h-4 text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           Toasted Coconut
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     content: (
  //       <div className=" flex flex-col items-center justify-center gap-2">
  //         <img
  //           className="w-72 h-96"
  //           src="/public/FavoriteSection/image5.png"
  //           alt=""
  //         />
  //         <div className="w-60 text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           The Slim 4-Way Stretch Organic Jean | Uniform
  //         </div>
  //         <div className="w-72 h-4 text-neutral-500 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">
  //           Toasted Coconut
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];

  const slides2 = [
    {
      content: (
        <div className=" hidden sm:flex gap-2 justify-center items-center">
          <div className="w-[50vw] h-64 px-16 flex-col justify-start items-start gap-10 inline-flex">
            <div className="self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
              People Are Talking
            </div>
            <div className="self-stretch h-32 flex-col justify-start items-start gap-3.5 flex">
              <div className="self-stretch text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
                "Love this shirt! Fits perfectly and the fabric is thick without{" "}
                <br />
                being stiff."
              </div>
            </div>
            <div className="self-stretch">
              <span className="text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
                -- JonSnSF,{" "}
              </span>
              <span className="text-black text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider">
                The Heavyweight Overshirt
              </span>
            </div>
          </div>
          <div>
            <img
              src="/favoriteImage/image.png"
              alt=""
              className=" w-[50vw] h-96"
            />
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className=" hidden sm:flex gap-2 justify-center items-center">
          <div className="w-[50vw]  h-64 px-16 flex-col justify-start items-start gap-10 inline-flex">
            <div className="self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
              People Are Talking
            </div>
            <div className="self-stretch h-32 flex-col justify-start items-start gap-3.5 flex">
              <div className="self-stretch text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
                "Love this shirt! Fits perfectly and the fabric is thick without{" "}
                <br />
                being stiff."
              </div>
            </div>
            <div className="self-stretch">
              <span className="text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
                -- JonSnSF,{" "}
              </span>
              <span className="text-black text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider">
                The Heavyweight Overshirt
              </span>
            </div>
          </div>
          <div>
            <img
              src="/favoriteImage/image.png"
              alt=""
              className=" w-[50vw] h-96"
            />
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className=" hidden sm:flex gap-2 justify-center items-center">
          <div className="w-[50vw] h-64 px-16 flex-col justify-start items-start gap-10 inline-flex">
            <div className="self-stretch text-black text-base font-normal font-['Maison Neue'] leading-normal tracking-wide">
              People Are Talking
            </div>
            <div className="self-stretch h-32 flex-col justify-start items-start gap-3.5 flex">
              <div className="self-stretch text-black text-2xl font-normal font-['Maison Neue'] leading-loose">
                "Love this shirt! Fits perfectly and the fabric is thick without{" "}
                <br />
                being stiff."
              </div>
            </div>
            <div className="self-stretch">
              <span className="text-black text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">
                -- JonSnSF,{" "}
              </span>
              <span className="text-black text-sm font-normal font-['Maison Neue'] underline leading-tight tracking-wider">
                The Heavyweight Overshirt
              </span>
            </div>
          </div>
          <div>
            <img
              src="/favoriteImage/image.png"
              alt=""
              className=" w-[50vw] h-96"
            />
          </div>
        </div>
      ),
    },
  ];

  const slider3 = [
    {
      content:(
        <div className=" flex sm:hidden flex-col items-center justify-center gap-4 ">
        <h3>People Are Talking</h3>
        <div>
          <img src="/favoriteImage/image.png" alt="" />
        </div>
        <div className=" flex flex-col gap-2">
  
       <div className=" flex gap-2">
       <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
       </div>
  
          <p>
            “Love this shirt! Fits perfectly and the fabric is thick without being
            stiff.”
          </p>
        </div>
      </div>
      )
    },
    {
      content:(
        <div className=" flex sm:hidden flex-col items-center justify-center gap-4 ">
        <h3>People Are Talking</h3>
        <div>
          <img src="/FavoriteSection/image1.png" alt="" />
        </div>
        <div className=" flex flex-col gap-2">
  
       <div className=" flex gap-2">
       <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
       </div>
  
          <p>
            “Love this shirt! Fits perfectly and the fabric is thick without being
            stiff.”
          </p>
        </div>
      </div>
      )
    },
    {
      content:(
        <div className=" flex sm:hidden flex-col items-center justify-center gap-4 ">
        <h3>People Are Talking</h3>
        <div>
          <img src="/FavoriteSection/image2.png" alt="" />
        </div>
        <div className=" flex flex-col gap-2">
  
       <div className=" flex gap-2">
       <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
       </div>
  
          <p>
            “Love this shirt! Fits perfectly and the fabric is thick without being
            stiff.”
          </p>
        </div>
      </div>
      )
    },
    {
      content:(
        <div className=" flex sm:hidden flex-col items-center justify-center gap-4 ">
        <h3>People Are Talking</h3>
        <div>
          <img src="/FavoriteSection/image4.png" alt="" />
        </div>
        <div className=" flex flex-col gap-2">
  
       <div className=" flex gap-2">
       <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
       </div>
  
          <p>
            “Love this shirt! Fits perfectly and the fabric is thick without being
            stiff.”
          </p>
        </div>
      </div>
      )
    },
    {
      content:(
        <div className=" flex sm:hidden flex-col items-center justify-center gap-4 ">
        <h3>People Are Talking</h3>
        <div>
          <img src="/FavoriteSection/image3.png" alt="" />
        </div>
        <div className=" flex flex-col gap-2">
  
       <div className=" flex gap-2">
       <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
       </div>
  
          <p>
            “Love this shirt! Fits perfectly and the fabric is thick without being
            stiff.”
          </p>
        </div>
      </div>
      )
    }
  ]

  return (
   <div>
     {/* <div className="w-full">
      <FavoritCarusel slides={slides} />
    </div> */}
     <div className="w-[60%] m-auto pt-11 flex flex-col gap-8 ">
     <FavoriteCarusel2 slides2={slides2} />
     <FavoriteCarusel2Sm slider3={slider3}/>
   </div>
   </div>
  );
};

export default App;
