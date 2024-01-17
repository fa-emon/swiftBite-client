import AboutBanner from "./AboutBanner/AboutBanner";
import Discover from "./Discover/Discover";
import Experience from "./Experience/Experience";
import Passion from "./Passion/Passion";


const AboutUs = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Experience></Experience>
            <Passion></Passion>
            <Discover></Discover>
        </div>
    );
};

export default AboutUs;