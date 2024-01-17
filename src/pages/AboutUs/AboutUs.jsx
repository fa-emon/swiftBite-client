import AboutBanner from "./AboutBanner/AboutBanner";
import Discover from "./Discover/Discover";
import Experience from "./Experience/Experience";
import MeetTheTeam from "./MeetTheTeam/MeetTheTeam";
import Passion from "./Passion/Passion";


const AboutUs = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <Experience></Experience>
            <Passion></Passion>
            <Discover></Discover>
            <MeetTheTeam></MeetTheTeam>
        </div>
    );
};

export default AboutUs;