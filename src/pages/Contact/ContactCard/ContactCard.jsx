import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { ImOffice } from "react-icons/im";

const ContactCard = () => {
    return (
        <div className="flex px-10 gap-10">
            <div className="card w-96 bg-[#0F1D22] shadow-xl mt-32 pt-24">
                <div className="rounded-full h-16 w-16 mx-auto bg-[#14262D] flex items-center justify-center">
                    <figure><FaLocationDot className="text-2xl text-white text-center"></FaLocationDot></figure>
                </div>
                <div className="mt-4">
                    <h2 className="small-font text-[#C9AB81] text-center text-4xl mb-4">Our Address</h2>
                    <p className="paragraph-font text-[#B0B0B0] text-center">Street: 3840 Winifred Way,</p>
                    <p className="paragraph-font text-[#B0B0B0] text-center">Helsinky</p>
                </div>
            </div>

            <div className="card w-96 bg-[#0F1D22] shadow-xl mt-32 pt-24">
                <div className="rounded-full h-16 w-16 mx-auto bg-[#14262D] flex items-center justify-center">
                    <figure><MdEmail className="text-2xl text-white text-center"></MdEmail></figure>
                </div>
                <div className="mt-4">
                    <h2 className="small-font text-[#C9AB81] text-center text-4xl mb-4">Email Address</h2>
                    <p className="paragraph-font text-[#B0B0B0] text-center">info@example.com</p>
                    <p className="paragraph-font text-[#B0B0B0] text-center">swiftbite@gmail.com</p>
                </div>
            </div>

            <div className="card w-96 bg-[#0F1D22] shadow-xl mt-32 pt-24 pb-24">
                <div className="rounded-full h-16 w-16 mx-auto bg-[#14262D] flex items-center justify-center">
                    <figure><FaPhone className="text-2xl text-white text-center"></FaPhone></figure>
                </div>
                <div className="mt-4">
                    <h2 className="small-font text-[#C9AB81] text-center text-4xl mb-4">Phone Numbers</h2>
                    <p className="paragraph-font text-[#B0B0B0] text-center">(480) 555-0103</p>
                    <p className="paragraph-font text-[#B0B0B0] text-center">(480) 444-2222</p>
                </div>
            </div>

            <div className="card w-96 bg-[#0F1D22] shadow-xl mt-32 pt-24">
                <div className="rounded-full h-16 w-16 mx-auto bg-[#14262D] flex items-center justify-center">
                    <figure><ImOffice className="text-2xl text-white text-center"></ImOffice></figure>
                </div>
                <div className="mt-4">
                    <h2 className="small-font text-[#C9AB81] text-center text-4xl mb-4">Office Hours</h2>
                    <p className="paragraph-font text-[#B0B0B0] text-center">Mon-Thu: 9:00AM - 5:00PM</p>
                    <p className="paragraph-font text-[#B0B0B0] text-center">Friday: Closed</p>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;