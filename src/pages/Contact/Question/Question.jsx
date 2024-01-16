

const Question = () => {
    return (
        <div className="mt-32 px-10 paragraph-font">
            <h2 className="text-[#C9AB81] text-center text-4xl small-font">Have Any Question</h2>
            <h2 className="heading-font text-[#B0B0B0] text-center text-5xl w-1/2 mx-auto mt-3">Have Be Any Question? Feel Free To
                Contact With You.</h2>
            <div className="w-3/4 flex mx-auto gap-10 mt-10">
                <div className="w-1/2">
                    <input type="text" placeholder="Name" className="input input-bordered w-full bg-black text-white" />
                </div>
                <div className="w-1/2">
                    <input type="text" placeholder="Subject" className="input input-bordered w-full bg-black text-white" />
                </div>
            </div>
            <div className="w-3/4 mx-auto mt-4">
                <input type="email" placeholder="Email Address" className="input input-bordered w-full bg-black text-white" />
            </div>
            <div className="w-3/4 mx-auto mt-4 bg-black rounded-xl">
                <textarea className="textarea" style={{ background: 'black', color: 'white' }} placeholder="Message"></textarea>
            </div>
        </div>
    );
};

export default Question;