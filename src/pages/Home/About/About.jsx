import { Button } from "@chakra-ui/react";
import 'animate.css';
import './About.css'

const About = () => {
    return (
        <div className="w-full flex justify-between px-10 mb-32">
            <div className="w-1/2">
                <h2 className="small-font text-[#C9AB81] text-4xl tracking-in-expand">About Us</h2>
                <hr className='border-t-2 border-[#C9AB81] w-[115px]' />
                <h3 className="uppercase text-4xl text-white heading-font mt-8 mb-4">Unveiling the <span className="text-[#C9AB81]">SwiftBite Story</span></h3>

                <img className="my-2" src="https://i.ibb.co/cNdRzDK/title-icon.png" alt="" />

                <p className="text-white text-justify paragraph-font my-2 leading-loose w-3/4">Embark on a culinary journey with SwiftBite, where each dish is a symphony of flavors and every bite tells a unique story. Our commitment to excellence and passion for crafting exceptional dining experiences define us. Indulge in a world where innovation meets tradition, and let your taste buds dance to the rhythm of exquisite flavors.</p>
                <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5'>
                    <span className='tracking-wider heading-font'>About More</span>
                </Button>
            </div>

            <div className="w-1/2 relative">
                <img className="ms-32 opacity-95 animate__animated animate__fadeInRight kenburns-top" style={{ height: '85vh', objectFit: 'contain', width: '100%' }} src="https://i.ibb.co/98cZtkj/pexels-photo-10757080.jpg" alt="" />

                {/* here, i want use rotate animation */}
                <img className="rounded-full rotate-center shadow-2xl border-4 border-solid border-[#C9AB81] animate__animated animate__fadeInLeft -mt-80 w-80 h-80 object-cover brightness-75" src="https://i.ibb.co/SyD41fv/pexels-photo-230484.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;