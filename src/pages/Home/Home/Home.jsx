import About from "../About/About";
import DisplayFood from "../DisplayFood/DisplayFood";
import Reservations from "../Reservations/Reservations";
import Services from "../Services/Services";
import ShortView from "../ShortView/ShortView";


const Home = () => {
    return (
        <div>
            <ShortView></ShortView>
            <About></About>
            <Services></Services>
            <Reservations></Reservations>
            <DisplayFood></DisplayFood>
        </div>
    );
};

export default Home;