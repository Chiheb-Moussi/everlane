const SectionSeven = () => {
    return (
      <div className=" flex  flex-col gap-8 justify-center items-center lg:px-[185px] lg:py-[90px] lg:grid lg:grid-cols-2 md:items-center md:justify-center">
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className=" mb-5 text-2xl font-normal font-['Maison Neue'] text-neutral-800 ">Cleaner fashion</p>
          <img src="/SectionSeven/image2.png" alt="" className="sm:h-[625px] sm:w-[505px] h-[300px] " />
          <p className="  text-neutral-800 text-sm font-normal font-['Maison Neue'] mt-5">See the sustainability efforts behind each of our products.</p>
          <a className="underline">read more</a>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p className=" mb-5 text-2xl font-normal font-['Maison Neue'] text-neutral-800 ">Our Holiday Gift Picks</p>
          <img src="/SectionSeven/image1.png" alt="" className="sm:h-[625px] sm:w-[505px] h-[300px]"/>
          <p className="  text-neutral-800 text-sm font-normal font-['Maison Neue'] mt-5">The best presents for everyone on your list.</p>
          <a className="underline">read more</a>
        </div>
      </div>
    );
  };
  export default SectionSeven;