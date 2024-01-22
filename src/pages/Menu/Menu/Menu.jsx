import { Helmet } from "react-helmet-async";
import BannerMenu from "../BannerMenu/BannerMenu";
// import MenuCover from "../MenuCover/MenuCover";
// import ShowAllData from "../LoadAllData/ShowAllData";
import LoadAllData from "../LoadAllData/LoadAllData";
// import useMenu from "../../../hooks/useMenu";


const Menu = () => {
    // const [menu] = useMenu();

    // const offeredItems = menu.filter(item => item.category === 'offer');
    // const soup = menu.filter(item => item.category === 'soup');
    // const drinks = menu.filter(item => item.category === 'drinks');
    // const desserts = menu.filter(item => item.category === 'desserts');
    // const pizza = menu.filter(item => item.category === 'pizza');
    // const salad = menu.filter(item => item.category === 'salad');
    // const burger = menu.filter(item => item.category === 'burger');
    // const sandwich = menu.filter(item => item.category === 'sandwich');
    // const seafood = menu.filter(item => item.category === 'salad');
    // const steaks = menu.filter(item => item.category === 'steak');
    // const pasta = menu.filter(item => item.category === 'pasta');
    // const vegetarian = menu.filter(item => item.category === 'vegetarian');
    // const healthyOption = menu.filter(item => item.category === 'healthy_option');


    return (
        <div>
            <Helmet>
                <title>swiftBite | Menu</title>
            </Helmet>
            <BannerMenu></BannerMenu>
            {/* <MenuCover></MenuCover> */}
            <LoadAllData></LoadAllData>
        </div>
    );
};

export default Menu;