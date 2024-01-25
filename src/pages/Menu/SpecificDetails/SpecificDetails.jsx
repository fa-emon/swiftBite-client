import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Button } from "@chakra-ui/react";

const SpecificDetails = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const specificDetails = useLoaderData();
    const { name, image, category, price, country, short_description } = specificDetails;

    const handleOrder = () => {
        navigate('/order', {state: {specificDetails}});
    }

    return (
        <div className="w-full mx-auto px-20 pt-44">
            <div className="flex shadow-xl bg-[#14262D]">
                <div className="w-3/5">
                    <img className="rounded-lg" src={image} alt="" />
                </div>
                <div className="w-3/5 ms-12 text-white pt-2">
                    <h2 className="card-title heading-font text-[#C9AB81] my-4 text-3xl">{name}</h2>
                    <p className="paragraph-font text-xl mb-6">{category}</p>
                    <p className="paragraph-font mb-6">Made By: {user?.displayName}</p>
                    <div className="flex justify-between mb-2">
                        <div>
                            <h2 className="paragraph-font text-[#C9AB81]">Price: ${price}</h2>
                        </div>
                        <div>
                            <p className="paragraph-font text-[#C9AB81] pr-40">Country: {country}</p>
                        </div>
                    </div>
                    <p className="paragraph-font text-justify w-3/4 pr-4 mt-4">{short_description}</p>
                    <div className="mr-4 mt-4">
                        <Button onClick={handleOrder} className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md px-2 py-2 w-full'>
                            <span className='tracking-wider heading-font uppercase'>Order now</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificDetails;