import './Believe.css'

const Believe = () => {
  return (
  
      <div className="bg-believe-image md:w-full w-full h-96 flex-col justify-center items-center gap-2.5 flex p-3">
        <div className="h-96 flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch text-center text-white md:text-4xl text-xl font-normal font-['Maison Neue'] leading-10 tracking-tight flex flex-col">
            We believe
            <br />
            we can all make
            <br />a difference.
          </div>
          <div className="self-stretch text-center text-white md:text-2xl text-xl font-normal font-['Maison Neue'] leading-loose">
            Our way: Exceptional quality.
            <br />
            Ethical factories. Radical Transparency.
          </div>
        </div>
      </div>
  
  );
};

export default Believe;
