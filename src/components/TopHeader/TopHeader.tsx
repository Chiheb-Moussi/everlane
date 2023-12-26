const TopHeader = () => {
    return <>
        <div className="w-full h-7 px-7 py-1.5 bg-black justify-between items-center inline-flex">
  <div className="grow shrink basis-0 h-4 justify-center items-center gap-1 flex">
    <div className="text-center text-white text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight">Get early access on launches and offers.</div>
    <div className="text-center text-white text-xs font-normal font-['Maison Neue'] underline leading-none tracking-tight">Sign Up For Texts</div>
    <div className="w-3.5 h-3.5 relative" />
  </div>
  <div className="justify-start items-center gap-3 flex">
    <div className="w-5 h-3.5 relative">
      <div className="w-5 h-3.5 left-0 top-0 absolute">
      </div>
    </div>
    <div className="text-white text-xs font-normal font-['Maison Neue'] leading-none tracking-tight">USD</div>
  </div>
</div>
    </>
}
export default TopHeader;