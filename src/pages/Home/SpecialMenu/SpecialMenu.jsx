import './SpecialMenu.css'
import ShowPopularData from './ShowPopularData';
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useMenu from '../../../hooks/useMenu';

const SpecialMenu = () => {
    const navigate = useNavigate();
    const [menu] = useMenu();

    const popularItems = menu.filter(item => item.category === 'popular_food');
    const sortedItems = popularItems.sort((a, b) => a.price - b.price);


    const handleSeeMore = () => {
        navigate('/menu');
    }

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
            <img className="text-center mx-auto" src="https://i.ibb.co/cNdRzDK/title-icon.png" alt="" />

            {/* {-----display the popular items-----} */}
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12'>
                {
                    sortedItems.slice(0, 6).map(popularFood => <ShowPopularData
                        key={popularFood._id}
                        popularFood={popularFood}
                    ></ShowPopularData>)
                }
            </div>
            <div className='flex justify-center'>
                <Button onClick={handleSeeMore} className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-16 w-[400px]'>
                    <span className='tracking-wider heading-font'>See More</span>
                </Button>
            </div>
        </div>
    );
};

export default SpecialMenu;