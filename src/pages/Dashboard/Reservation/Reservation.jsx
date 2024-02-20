import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
import { TimePicker } from 'antd';
import { FaPhoneAlt } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";


const Reservation = () => {
    const format = 'HH:mm';

    return (
        <>
            <div className="flex items-center justify-center w-full">
                <img className="wobble-hor-bottom" style={{ height: '20vh', width: '20vh', objectFit: 'contain' }} src="https://i.ibb.co/jhs65zG/vecteezy-aesthetic-flower-plant-leaves-10869705.png" alt="" />
                <p className="text-center text-[#C9AB81] text-5xl heading-font"> <span className="text-white">RESERVE</span> YOUR SPOT</p>
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

            <div className='heading-font grid md:grid-cols-3 gap-6 mt-4'>
                <div>
                    <h2 className='text-[#C9AB81] text-lg'>Date</h2>
                    <>
                        <Space
                            direction="vertical"
                            style={{
                                width: '100%',
                            }}
                        >
                            <DatePicker
                                className='py-3'
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Space>
                    </>
                </div>
                <div>
                    <h2 className='text-[#C9AB81] text-lg'>Time</h2>
                    <TimePicker className='w-full py-3' defaultValue={dayjs('12:08', format)} format={format} />
                </div>
                <div>
                    <h2 className='text-[#C9AB81] text-lg'>Guest</h2>
                    <select className="select select-bordered w-full text-base">
                        <option disabled selected>Choose one</option>
                        <option>1 person</option>
                        <option>2 person</option>
                        <option>3 person</option>
                        <option>4 person</option>
                        <option>5 person</option>
                    </select>
                </div>
                <div>
                    <h2 className='text-[#C9AB81] text-lg'>Name</h2>
                    <input type="text" placeholder="Name.." className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <h2 className='text-[#C9AB81] text-lg'>Phone</h2>
                    <input type="number" placeholder="Phone.." className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <h2 className='text-[#C9AB81] text-lg'>Email</h2>
                    <input type="email" placeholder="Email.." className="input input-bordered w-full max-w-xs" />
                </div>
            </div>

            <div className='mt-24 heading-font'>
                <div className='grid md:grid-cols-3 gap-6'>
                    <div className='bg-[#C9AB81] rounded-lg hover:bg-black hover:text-white'>
                        <span className='text-xl'><FaPhoneAlt className='mx-auto my-6 heartbeat'></FaPhoneAlt></span>
                    </div>
                    <div className='bg-[#C9AB81] rounded-lg hover:bg-black hover:text-white'>
                        <span className='text-2xl'><FaLocationDot className='mx-auto my-6'></FaLocationDot></span>
                    </div>
                    <div className='bg-[#C9AB81] rounded-lg hover:bg-black hover:text-white'>
                        <span className='text-2xl'><GoClockFill className='mx-auto my-6'></GoClockFill></span>
                    </div>
                </div>

                <div className='bg-[#0F1D22] mb-6 rounded'>
                    <div className='grid md:grid-cols-3 gap-6 text-center mt-6 py-10'>
                        <div className='mt-6'>
                            <h2 className='text-[#C9AB81] text-lg'>Phone</h2>
                            <p className='text-[#808080]'>+0084474847493</p>
                        </div>
                        <div>
                            <h2 className='text-[#C9AB81] text-lg'>Address</h2>
                            <p className='text-[#808080]'>32/A, Park street</p>
                            <p className='text-[#808080]'>Helsinki, Finland</p>
                        </div>
                        <div className='mt-6'>
                            <h2 className='text-[#C9AB81] text-lg'>Opening Hour</h2>
                            <p className='text-[#808080]'>Mon-Fri : 9.00am-6.00pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Reservation;