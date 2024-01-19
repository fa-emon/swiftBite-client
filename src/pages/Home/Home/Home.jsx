import About from "../About/About";
import Banner from "../Banner/Banner";
import Blog from "../Blog/Blog";
import DisplayFood from "../DisplayFood/DisplayFood";
import Feedback from "../Feedback/Feedback";
import Reservations from "../Reservations/Reservations";
import Services from "../Services/Services";
import ShortView from "../ShortView/ShortView";
import SpecialMenu from "../SpecialMenu/SpecialMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShortView></ShortView>
            <SpecialMenu></SpecialMenu>
            <About></About>
            <Services></Services>
            <Reservations></Reservations>
            <DisplayFood></DisplayFood>
            <Feedback></Feedback>
            <Blog></Blog>
        </div>
    );
};

export default Home;