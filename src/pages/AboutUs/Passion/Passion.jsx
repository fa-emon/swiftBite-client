

const Passion = () => {
    return (
        <div className="mt-32 px-10 ">
            <div className="w-full flex gap-8 items-center justify-between">
                <div className="w-1/2">
                    <img className="brightness-75" style={{ height: '50vh', objectFit: 'contain', width: '100%' }} src="https://i.ibb.co/qgQPKS4/pexels-photo-5491010.jpg" alt="" />
                </div>
                <div className="w-1/2">
                    <p className="text-center text-[#B0B0B0] text-xl heading-font mb-3">ABOUT</p>
                    <h2 className="text-5xl text-center text-[#C9AB81] tracking-wide heading-font mb-4">SWIFTBITE
                    </h2>
                    <p className="text-white text-justify paragraph-font">SwiftBite, a cutting-edge React project, is a virtual culinary haven where the art of cooking meets elegant web design. Crafted with precision, it brings the restaurant experience to the digital realm, showcasing our commitment to innovation and user-centric design. Explore SwiftBite, where technology and gastronomy converge for a delightful online dining journey.</p>
                </div>
                <div className="w-1/2">
                    <img className="brightness-75" style={{ height: '50vh', objectFit: 'contain', width: '100%' }} src="https://i.ibb.co/t2m4pL5/pexels-photo-4551156.jpg" alt="" />
                </div>
            </div>

            {/* {second part} */}
            <div className="flex w-full mt-10">
                <div className="w-1/2">
                    <img className="brightness-75" style={{ height: '50vh', objectFit: 'contain', width: '100%' }} src="https://i.ibb.co/Wc8s3Gs/pexels-photo-1639558.jpg" alt="" />
                </div>
                <div className="w-1/2">
                    <img className="brightness-75" style={{ height: '50vh', objectFit: 'contain', width: '100%' }} src="https://i.ibb.co/ZYt94VP/pexels-photo-3628428.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Passion;