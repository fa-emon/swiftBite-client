import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import ShowBookingHistory from "./ShowBookingHistory";


const BookingHistory = () => {
    const { user } = useAuth();
    const { data: bookingHistory, isLoading, isError } = useQuery({
        queryKey: ['bookingHistory', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookingHistory/${user.email}`);
            if (!res.ok) {
                throw new Error('Failed to fetch booking history');
            }
            return res.json();
        },
    });

    if (isLoading) {
        return <div>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </div>;
    }

    if (isError) {
        return <div>Error loading data</div>;
    }

    return (
        <>
            <div className="flex items-center justify-center w-full">
                <img className="wobble-hor-bottom" style={{ height: '20vh', width: '20vh', objectFit: 'contain' }} src="https://i.ibb.co/jhs65zG/vecteezy-aesthetic-flower-plant-leaves-10869705.png" alt="" />
                <p className="text-center text-[#C9AB81] text-5xl heading-font"> <span className="text-white">MY BOOKING</span> HISTORY</p>
                <img
                    className="wobble-and-rotate"
                    style={{
                        height: '20vh',
                        width: '20vh',
                        objectFit: 'contain',
                        transform: 'scaleX(-1)',
                    }}
                    src="https://i.ibb.co/jhs65zG/vecteezy-aesthetic-flower-plant-leaves-10869705.png"
                    alt=""
                />
            </div>


            <div className="overflow-x-auto text-white mt-6 w-full bg-[] rounded-md">
                <table className="table heading-font tracking-widest">
                    {/* head */}
                    <thead className="text-[#C9AB81]">
                        <tr>
                            <th>IMAGE</th>
                            <th>FOOD NAME</th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingHistory.map((item, index) => (
                            <ShowBookingHistory
                                key={index}
                                item={item.detailedMenuItems}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BookingHistory;