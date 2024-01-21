

const ShowPopularData = ({ popularFood }) => {
    const { name, image, short_description, price } = popularFood;

    return (
        <div className="card bg-[#14262D] shadow-xl">
            <figure><img className="transform hover:scale-90 transition-transform duration-700 hover:brightness-95" style={{ height: '50vh', objectFit: 'cover', width: '100%' }} src={image} alt="" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title heading-font text-[#C9AB81] mb-2">{name}</h2>
                <p className="paragraph-font">{short_description}</p>
                <h2 className="paragraph-font text-[#C9AB81]">Price: ${price}</h2>
            </div>
        </div>
    );
};

export default ShowPopularData;