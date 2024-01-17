import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import "./Contact.css"; 
import ContactCard from "./ContactCard/ContactCard";
import Question from "./Question/Question";
import Gmap from "./Gmap/Gmap";

const Contact = () => {
    return (
        <div>
            <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        { image: 'https://i.ibb.co/BtsW8cG/pexels-photo-1907228.jpg', speed: -20 },
                        {
                            speed: -15,
                            children: (
                                <div className="absolute inset-80 flex items-center justify-start top-4">
                                    <h1 className="text-8xl text-[#a7a7a7e8] font-thin heading-font"></h1>
                                </div>
                            ),
                        },
                        { image: '', speed: -10 },
                    ]}
                    className="aspect-[2/1] relative overflow-hidden"
                >
                    <div className="overlay"></div>
                </ParallaxBanner>
            </ParallaxProvider>

            <ContactCard></ContactCard>
            <Question></Question>
            <Gmap></Gmap>
        </div>
    );
};

export default Contact;
