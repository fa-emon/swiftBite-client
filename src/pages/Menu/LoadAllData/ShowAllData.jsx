import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const ShowAllData = ({ allData }) => {
    const navigate = useNavigate();
    const { name, image, category, price, quantity } = allData;

    const handleSeeDetails = (id) => {
        navigate(`/menu/category/${id}`);
    }

    return (
        <div className="card bg-[#14262D] shadow-xl">
            <figure><img className="transform hover:scale-90 transition-transform duration-700 hover:brightness-95" style={{ height: '50vh', objectFit: 'cover', width: '100%' }} src={image} alt="" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title heading-font text-[#C9AB81] mb-2">{name}</h2>
                <p className="paragraph-font text-xl">{category}</p>
                <div className="flex justify-between">
                    <div>
                        <h2 className="paragraph-font text-[#C9AB81]">Price: ${price}</h2>
                    </div>
                    <div>
                        <p className="paragraph-font text-[#C9AB81]">Quantity: {quantity}</p>
                    </div>
                </div>
            </div>
            <Button onClick={() => handleSeeDetails(allData._id)} className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-b-md px-2 py-2'>
                    <span className='tracking-wider heading-font uppercase'>See Details</span>
                </Button>
        </div>
    );
};

export default ShowAllData;