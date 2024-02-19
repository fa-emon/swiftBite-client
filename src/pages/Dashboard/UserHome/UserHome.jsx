import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoWallet } from "react-icons/io5";
import { GiBowlOfRice } from "react-icons/gi";
import { BiSolidBowlHot } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";


const UserHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: statistics = {} } = useQuery({
        queryKey: ['user-statistics', user?.email],
        queryFn: async () => {
            const res = await axiosSecure(`/user-statistics/${user.email}`)
            return res.data;
        }
    })

    const orderCount = statistics.totalItemCount || 0;

    return (

        <>
            <div className="w-full mx-auto mt-8 mb-10">
                <div className="w- mt-5">
                    <img className="w-32 h-32 rounded-full mx-auto object-cover" src={user?.photoURL} alt="" />
                </div>

                <div className="w-">
                    <div className="animate__animated animate__fadeInLeft">
                        <img className="w-48 h-1/6 mx-auto" src="https://i.ibb.co/3cm669T/8474.png" alt="" />
                    </div>
                    <h2 className="text-center heading-font text-4xl mb-3 text-[#C9AB81]"><span className="text-white">Welcome</span>, {user?.displayName}</h2>
                    <div className="animate__animated animate__fadeInRight">
                        <img className="w-48 h-1/6 mx-auto" src="https://i.ibb.co/42V3H53/89745.png" alt="" />
                    </div>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-[#C9AB81] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                        <div className="flex items-center justify-center">
                            <IoWallet className="text-6xl me-2 text-[#f1f1f1]"></IoWallet>
                            <div>
                                <p className="text-3xl heading-font text-end">${statistics.totalRevenue}</p>
                                <p className="text-2xl all-font text-end">TOTAL PAID</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#C9AB81] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                        <div className="flex items-center justify-center">
                            <BiSolidBowlHot className="text-6xl me-2 text-[#f1f1f1]"></BiSolidBowlHot>
                            <div>
                                <p className="text-3xl heading-font">{orderCount}</p>
                                <p className="text-2xl all-font">ORDERS</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#C9AB81] rounded py-10 text-center hover:bg-[#0e0e0e] hover:text-white">
                        <div className="flex items-center justify-center">
                            <GiBowlOfRice className="text-6xl me-2 text-[#f1f1f1]"></GiBowlOfRice>
                            <div>
                                <p className="text-3xl heading-font">{statistics.menuItemsCount}</p>
                                <p className="text-2xl all-font">MENU ITEMS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserHome;