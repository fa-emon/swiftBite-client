import './SpecialMenu.css'

const SpecialMenu = () => {
    return (
        <div className="mb-32 px-10">
            <p className="text-[#C9AB81] text-4xl small-font text-center">Special Selection</p>
            <div className="flex items-center justify-center w-full">
                <img className="wobble-hor-bottom" style={{ height: '20vh', width: '20vh', objectFit: 'contain' }} src="https://i.ibb.co/jhs65zG/vecteezy-aesthetic-flower-plant-leaves-10869705.png" alt="" />
                <p className="text-center text-[#C9AB81] text-5xl heading-font"> <span className="text-white">From</span> Our Menu</p>
                <img
                    className="wobble-and-rotate"
                    style={{
                        height: '20vh',
                        width: '20vh',
                        objectFit: 'contain',
                        transform: 'scaleX(-1)',
                    }}
                    src="https://i.ibb.co/jhs65zG/vecteezy-aesthetic-flower-plant-leaves-10869705.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default SpecialMenu;