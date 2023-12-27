import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import logo from "../../assets/logo/Logo.svg"




const TopMenu = () => {
  return (
    <div className="w-full h-14 px-16 border-b border-zinc-300 justify-between items-center inline-flex">
  <div className="w-full justify-start items-start flex">
    <div className="px-3 py-5 flex-col justify-start items-start gap-3 inline-flex">
      <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight cursor-pointer">Women</div>
    </div>
    <div className="px-3 pt-5 flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight cursor-pointer">Men</div>
      <div className="self-stretch h-0.5 bg-neutral-800" />
    </div>
    <div className="px-3 py-5 flex-col justify-start items-start gap-3 inline-flex">
      <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight cursor-pointer">About</div>
    </div>
    <div className="px-3 py-5 flex-col justify-start items-start gap-3 inline-flex">
      <div className="text-center text-neutral-800 text-xs font-normal font-['Maison Neue'] leading-none tracking-tight cursor-pointer">Everworld Stories</div>
    </div>
  </div>
  <img className="w-32 h-4 relative right-1/3" src={logo} alt="Everland"/>
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
  )
}

export default TopMenu
