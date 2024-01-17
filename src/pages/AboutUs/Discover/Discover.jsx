import './Discover.css'

const Discover = () => {
    return (
        <div className="flex w-full mt-32 px-10 gap-10">
            <div className="w-1/2 px-20">
                <p className="text-[#B0B0B0] text-xl heading-font mb-8">DELICIOUS PLATES</p>
                <h2 className="text-9xl text-[#C9AB81] tracking-wide heading-font mb-8">DISCOVER OUR MENU
                </h2>
                <p className="text-white text-justify paragraph-font">SwiftBite, a cutting-edge React project, is a virtual culinary haven where the art of cooking meets elegant web design. Crafted with precision, it brings the restaurant experience to the digital realm, showcasing our commitment to innovation and user-centric design. Explore SwiftBite, where technology and gastronomy converge for a delightful online dining journey.</p>
            </div>
            <div className="w-1/2">
                <img className="brightness-75" style={{ height: '100vh', objectFit: 'contain', width: '100%' }} src="https://i.ibb.co/RcN8jKy/pexels-photo-9295657.jpg" alt="" />
            </div>
        </div>
    );
};

export default Discover;