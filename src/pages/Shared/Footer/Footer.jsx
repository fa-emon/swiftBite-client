import { MdOutlinePhone } from "react-icons/md";
import './Footer.css'

const Footer = () => {

    return (
        <div className="flex items-center justify-center px-10 p-32">
            <div className="w-1/2">
                <div className="flex items-center justify-center">
                    <img src="https://i.ibb.co/7SP6xHX/map.png" alt="" />
                    <h2 className="small-font ms-6 text-4xl text-[#C9AB81]">Address</h2>
                </div>
                <div className="text-center mt-6">
                    <p className="paragraph-font text-[#B0B0B0]">Street: 3840 Winifred Way, Marion,</p>
                    <p className="paragraph-font text-[#B0B0B0]">Helsinki, Finland</p>
                </div>
            </div>

            <hr />

            <div className="w-1/2">
                <div className="flex items-center justify-center">
                    <span className="text-[#C9AB81] text-2xl heartbeat"><MdOutlinePhone></MdOutlinePhone></span>
                    <h2 className="small-font ms-6 text-4xl text-[#C9AB81]">Contact Us</h2>
                </div>
                <div className="text-center mt-6">
                    <p className="paragraph-font text-[#B0B0B0]">
                        (123) 23456 788 123 4578 954</p>
                    <p className="paragraph-font text-[#B0B0B0]">Open: 09:00 am – 01:00 pm</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;