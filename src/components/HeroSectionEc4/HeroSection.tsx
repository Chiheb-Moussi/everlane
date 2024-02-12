


const HeroSection = () => {
    return (
        <div className="relative">

            <img
                src="./images/Hero-sectionEC4.png"
                alt="Hero Section Background"
                className="w-full h-auto object-cover lg:block sm:"
            />
            <span>
            <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
                <div className="lg:text-5xl font-normal leading-normal tracking-tight mb-4 mt-20 sm:text-xl">
                    Happy New Gear
                </div>
                <div className="lg:text-2xl font-normal leading-none mb-4 sm:text-xs">
                    Flexible, comfort-driven styles,<br/>designed for every move.
                </div>
                <button
                    className="bg-white text-black text-xs font-normal py-3 px-20 transition-colors duration-300 hover:bg-black hover:text-white  sm: "
                >
                    SHOP NOW
                </button>
            </div>
            </span>
        </div>
    );
};
export default HeroSection;