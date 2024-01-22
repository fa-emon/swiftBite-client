import { Helmet } from "react-helmet-async";
import BannerMenu from "../BannerMenu/BannerMenu";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>swiftBite | Menu</title>
            </Helmet>
            <BannerMenu></BannerMenu>
        </div>
    );
};

export default Menu;