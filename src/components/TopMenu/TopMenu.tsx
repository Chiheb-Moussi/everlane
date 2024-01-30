import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import logo from "../../assets/logo/Logo.svg";
import { CiMenuBurger } from "react-icons/ci";

const TopMenu = () => {
  return (
    <div className="w-full h-14 sm:container sm:px-16 px-4 border-b border-zinc-300 justify-between items-center flex gap-4">
      <div className=" hidden sm:w-fit sm:justify-start sm:items-start sm:flex">
        <div className="px-3 py-5 flex-col justify-start items-start gap-3 inline-flex">
          <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight cursor-pointer">
            Women
          </div>
        </div>
        <div className="px-3 pt-5 flex-col justify-start items-start gap-4 inline-flex">
          <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight cursor-pointer">
            Men
          </div>
          <div className="self-stretch h-0.5 bg-neutral-800" />
        </div>
        <div className="px-3 py-5 flex-col justify-start items-start gap-3 inline-flex">
          <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight cursor-pointer">
            About
          </div>
        </div>
        <div className="px-3 py-5 flex-col justify-start items-start gap-3 inline-flex ">
          <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight cursor-pointer">
            Everworld Stories
          </div>
        </div>
      </div>
      <div className="flex sm:hidden">
        <CiMenuBurger className=" text-2xl" />
      </div>
      <div className=" xl:text-center xl:pl-14 md:pl-20">
        <img
          className="w-20 pl-2 sm:w-32 h-4 lg:right-32 relative sm:right-20"
          src={logo}
          alt="Everland"
        />
      </div>
      <div className="justify-end items-center flex">
        <div className="p-3 justify-center items-center gap-2.5 flex">
          <IoSearchOutline className="w-4 h-4 relative" />
        </div>
        <div className="p-3 justify-center items-center gap-2.5 flex">
          <FaRegUser className="w-4 h-4 relative" />
        </div>
        <div className="p-3 justify-center items-center gap-2.5 flex">
          <RiShoppingCart2Line className="w-4 h-4 relative" />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
