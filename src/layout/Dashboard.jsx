import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaSwatchbook } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { GrGallery } from "react-icons/gr";
import { FaBlog } from "react-icons/fa";
import { PiFinnTheHumanFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { BiSolidBookBookmark } from "react-icons/bi";
import useOrder from "../hooks/useOrder";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [order] = useOrder();

    // TODO: load data from the server to have dynamic isAdmin on data.
    // const isAdmin = true;

    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col px-10 w-full">

                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#C9AB81]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content heading-font tracking-wide">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                            <>
                                <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link to={'/dashboard/adminHome'}><AiFillHome className="text-lg" />ADMIN HOME</Link>
                                </li>
                                <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link to={'/dashboard/addItems'}><ImSpoonKnife className="text-lg" />ADD ITEMS</Link>
                                </li>
                                <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link to={'/dashboard/manageItems'}><GiHamburgerMenu className="text-lg" />MANAGE ITEMS</Link>
                                </li>
                                <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link to={'/dashboard/manageBookings'}><BiSolidBookBookmark className="text-lg" />MANAGE BOOKINGS</Link>
                                </li>
                                <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link to={'/dashboard/allusers'}><FaUsers className="text-lg" />ALL USERS</Link>
                                </li>
                            </>
                            :
                            <>
                                <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link to={'/dashboard/userHome'}><IoHome className="text-lg" />USER HOME</Link>
                                </li>
                                <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><SlCalender className="text-lg" />RESERVATION</Link>
                                </li>
                                <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><IoWalletSharp className="text-lg" />PAYMENT HISTORY</Link>
                                </li>
                                <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link to={'/dashboard/myOrder'}><FaShoppingCart className="text-lg" />MY ORDER<div className="badge bg-black hover:bg-[#C9AB81] text-white hover:text-black border-[#C9AB81]">+{order.length || 0}</div></Link>
                                </li>
                                <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                                    <Link><FaSwatchbook className="text-lg" />MY BOOKING HISTORY</Link>
                                </li>
                            </>
                    }

                    <hr style={{ backgroundColor: 'black', height: '2px', border: 'none', marginTop: '10px', marginBottom: '10px' }} />

                    <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                        <Link to={'/'}><IoHome className="text-lg" />HOME</Link>
                    </li>
                    <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                        <Link to={'/menu'}><TiThMenu className="text-lg" />MENU</Link>
                    </li>
                    <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                        <Link to={'/blog'}><FaBlog className="text-lg" />BLOG</Link>
                    </li>
                    <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                        <Link to={'/gallery'}><GrGallery className="text-lg" />GALLERY</Link>
                    </li>
                    <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                        <Link to={'/about'}><PiFinnTheHumanFill className="text-lg" />ABOUT US</Link>
                    </li>
                    <li className="bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded-md">
                        <Link to={'/contact'}><FaHeadphones className="text-lg" />CONTACT</Link>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;