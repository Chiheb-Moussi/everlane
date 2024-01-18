const EventsSection = () => {
    return (
        <div className="w-full h-96 px-10 py-24 justify-start items-start gap-3 inline-flex flex-wrap">
        <div className="grow shrink basis-0 h-96 flex-col justify-center items-center gap-6 inline-flex bg-cover bg-[url(/EventsFoto/bild1.jpg)] ">
          <div className="self-stretch text-center text-white text-4xl font-normal font-['Maison Neue'] leading-10 tracking-tight">New Arrivals</div>
          <div className="w-60 py-3 bg-white justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">SHOP THE LATEST</div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-96 flex-col justify-center items-center gap-6 inline-flex bg-cover bg-[url(/EventsFoto/bild2.jpg)]">
          <div className="self-stretch text-center text-white text-4xl font-normal font-['Maison Neue'] leading-10 tracking-tight">Best-Sellers</div>
          <div className="w-60 py-3 bg-white justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">SHOP YOUR FAVORITES</div>
          </div>
        </div>
        <div className="grow shrink basis-0 h-96 flex-col justify-center items-center gap-6 inline-flex bg-cover bg-[url(/EventsFoto/bild3.jpg)]">
          <div className="self-stretch text-center text-white text-4xl font-normal font-['Maison Neue'] leading-10 tracking-tight">The Holiday Outfit</div>
          <div className="w-60 py-3 bg-white justify-center items-center gap-2.5 inline-flex">
            <div className="text-center text-neutral-800 text-sm font-normal font-['Maison Neue'] leading-none tracking-wider">SHOP OCCASION</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EventsSection;
  

