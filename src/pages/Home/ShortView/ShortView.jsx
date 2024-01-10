import 'animate.css';

const ShortView = () => {
    return (
        <div className="w-full mt-10 mb-20">
            <div className="animate__animated animate__fadeInLeft">
                <img className="w-32 h-1/5 mx-auto" src="https://i.ibb.co/GpBmVd4/1.png" alt="" />
            </div>
            <h2 className="paragraph-font text-xl text-[#B0B0B0] text-center my-2 px-10"> <span className='small-font text-5xl'>I</span>ndulge in culinary excellence at SwiftBite, where every bite tells a story of flavor and innovation. Uncover a symphony of tastes crafted with passion, inviting you to savor the artistry of our global-inspired dishes. Elevate your dining experience with SwiftBite – where taste meets sophistication</h2>
            <div className="animate__animated animate__fadeInRight">
                <img className="w-32 h-1/5 mx-auto" src="https://i.ibb.co/qWwVFrw/2.png" alt="" />
            </div>
        </div>
    );
};

export default ShortView;