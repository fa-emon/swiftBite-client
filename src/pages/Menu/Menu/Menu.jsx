import { Helmet } from "react-helmet-async";
import BannerMenu from "../BannerMenu/BannerMenu";
import LoadAllData from "../LoadAllData/LoadAllData";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>swiftBite | Menu</title>
            </Helmet>
            <BannerMenu></BannerMenu>
            <LoadAllData></LoadAllData>
        </div>
    );
};

export default Menu;