

const MeetTheTeam = () => {
    return (
        <div className="px-20 mt-32">
            <div className="mb-10 text-center">
                <h2 className="heading-font text-[#B0B0B0] text-2xl mb-4">OUR CHEFS</h2>
                <h2 className="heading-font text-5xl text-[#C9AB81]">MEET THE TEAM</h2>
            </div>

            <div className="flex gap-10">
                <div className="card w-96 bg-[#14262D] shadow-xl">
                    <figure><img className="transform hover:scale-105 transition-transform duration-300 hover:brightness-50 brightness-50" style={{ height: '50vh', objectFit: 'cover', width: '100%' }} src="https://i.ibb.co/6gGm8bh/free-photo-of-elegant-man-wearing-blazer-in-black-and-white.jpg" alt="" /></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title heading-font text-[#C9AB81]">FOUNDER</h2>
                        <p className="heading-font">JOHN SMITH</p>
                        <h2 className="paragraph-font">Passionate visionary with a culinary soul, crafting delectable experiences as the founder of SwiftBite.</h2>
                    </div>
                </div>
                <div className="card w-96 bg-[#14262D] shadow-xl">
                    <figure><img className="brightness-75 transform hover:scale-105 transition-transform duration-300 hover:brightness-50" style={{ height: '50vh', objectFit: 'cover', width: '100%' }} src="https://i.ibb.co/Csfg6XS/free-photo-of-woman-posing-in-suit-in-black-and-white.jpg" alt="" /></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title heading-font ">CHEF</h2>
                        <p className="text-[#C9AB81] heading-font">ANNA ROBINSON</p>
                        <h2 className="paragraph-font">Mastering the art of flavors, our chef transforms ingredients into culinary symphonies.</h2>
                    </div>
                </div>
                <div className="card w-96 bg-[#14262D] shadow-xl">
                    <figure><img className="brightness-50 transform hover:scale-105 transition-transform duration-300 hover:brightness-50" style={{ height: '50vh', objectFit: 'cover', width: '100%' }} src="https://i.ibb.co/gZd6dhx/free-photo-of-black-and-white-photo-of-a-man-on-the-background-of-illuminated-building.jpg" alt="" /></figure>
                    <div className="card-body text-white">
                        <h2 className="card-title heading-font ">CHEF</h2>
                        <p className="heading-font text-[#C9AB81]">MIKE RIGHT</p>
                        <h2 className="paragraph-font">Meet our culinary maestro, an artist in the kitchen who elevates dining to an extraordinary experience at SwiftBite.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetTheTeam;