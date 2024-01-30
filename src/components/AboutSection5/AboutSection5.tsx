const AboutSection5 = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex bg-yellow-600 flex-col md:gap-4 md:items-center md:justify-center  md:flex-row w-fit">
        <div className="md:px-[70px] h-full w-full">
          <div className="md:w-96 text-black text-xs font-semibold font-['Maison Neue'] leading-none tracking-tight">
            OUR FACTORIES
          </div>
          <div className="md:w-96 text-black md:text-4xl text-xl font-bold md:font-normal font-['Maison Neue'] leading-10 tracking-tight">
            Our ethical approach.
          </div>
          <div className="md:w-96 text-black text-sm font-normal font-['Maison Neue'] tracking-wider leading-6 md:leading-4 mt-2">
            We spend months finding the best factories around the world—the same
            ones that produce your favorite designer labels. We visit them often
            and build strong personal relationships with the owners. Each
            factory is given a compliance audit to evaluate factors like fair
            wages, reasonable hours, and environment. Our goal? A score of 90 or
            above for every factory.
          </div>
        </div>
        <div className="w-full">
          <img src="/aboutSection5/image.png" alt="" className="w-96 h-96" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection5;
