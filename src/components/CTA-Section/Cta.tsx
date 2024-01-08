const Cta = () => {
    return (
        <div className="relative">
            <div className="bg-cover bg-center h-screen flex items-center justify-center">
                <img src={`/src/images/cta-ec7.png`} alt="" />
                <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black  py-2 px-4 rounded transition-colors duration-300 hover:bg-black hover:text-white"
                    style={{ top: 'calc(55%)' }}
                >
                    LEARN MORE
                </button>
            </div>
        </div>
    );
};

export default Cta;


