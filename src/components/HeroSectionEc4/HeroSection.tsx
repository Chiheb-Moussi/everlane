

const HeroSection = () => {
    return (
        <div className="relative">
            <div className="bg-cover bg-center h-full flex items-center justify-center relative">
                <img src="/images/Hero-sectionEC4.png" alt="Hero Section Background" />
                <div className="absolute left-1/3 transform -translate-x-2/3 text-center text-white">
                    <div className="text-5xl font-normal leading-normal tracking-tight mb-4">
                        Happy New Gear
                    </div>
                    <div className="text-2xl font-normal leading-none ">
                        Flexible, comfort-driven styles,
                    </div>
                    <div className="text-2xl font-normal leading-none mb-14">
                        <br/>designed for every move.
                    </div>
                    <button
                        className="bg-white text-black text-xs font-normal py-3 px-3.5  transition-colors duration-300 hover:bg-black hover:text-white w-56"

                    >
                        SHOP NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
