import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoWallet } from "react-icons/io5";
import { BiSolidBowlHot } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiBowlOfRice } from "react-icons/gi";
import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: statistics = {} } = useQuery({
        queryKey: ['admin-statistics'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-statistics')
            return res.data;
        }
    })

    return (

        <>
            <div className="w-full mb-10">
                <div className="animate__animated animate__fadeInLeft">
                    <img className="w-48 h-1/6 mx-auto" src="https://i.ibb.co/3cm669T/8474.png" alt="" />
                </div>
                <h2 className="text-center heading-font text-4xl mb-3 text-[#C9AB81]"><span className="text-white">Welcome</span>, {user?.displayName}</h2>
                <div className="animate__animated animate__fadeInRight">
                    <img className="w-48 h-1/6 mx-auto" src="https://i.ibb.co/42V3H53/89745.png" alt="" />
                </div>
            </div>

            <div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-[#C9AB81] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                        <div className="flex items-center justify-center">
                            <IoWallet className="text-6xl me-2 text-[#f1f1f1]"></IoWallet>
                            <div>
                                <p className="text-3xl heading-font text-end">${statistics.revenue}</p>
                                <p className="text-2xl all-font text-end">REVENUE</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#C9AB81] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                        <div className="flex items-center justify-center">
                            <FaUsers className="text-6xl me-2 text-[#f1f1f1]"></FaUsers>
                            <div>
                                <p className="text-3xl heading-font">{statistics.user}</p>
                                <p className="text-2xl all-font text-end">CUSTOMERS</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#C9AB81] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                        <div className="flex items-center justify-center">
                            <GiBowlOfRice className="text-6xl me-2 text-[#f1f1f1]"></GiBowlOfRice>
                            <div>
                                <p className="text-3xl heading-font">{statistics.menuItems}</p>
                                <p className="text-2xl all-font">MENU ITEMS</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#C9AB81] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                        <div className="flex items-center justify-center">
                            <BiSolidBowlHot className="text-6xl me-2 text-[#f1f1f1]"></BiSolidBowlHot>
                            <div>
                                <p className="text-3xl heading-font">{statistics.orders}</p>
                                <p className="text-2xl all-font">ORDERS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminHome;