import './BookATable.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Select } from '@chakra-ui/react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { TimePicker } from 'antd';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const BookATable = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
            components={[
                'DatePicker',
                'TimePicker',
                'DateTimePicker',
                'DateRangePicker',
            ]}
        ></DemoContainer>
    </LocalizationProvider>

    return (
        <div className="bg-image bg-bri bg-fixed mt-32">
            <div className='bg-[#14262D] w-full py-20'>
                <>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='text-center'>
                                <h2 className='text-white text-3xl heading-font'><span style={{ fontFamily: 'Ephesis, cursive' }}>Flor Waross</span></h2>

                                <p className='heading-font text-[#C9AB81] text-2xl mt-2 mb-4'>CEO</p>
                                <h2 className='text-[#B0B0B0] paragraph-font text-base text-justify mx-auto w-3/4'>SwiftBite, a culinary haven with a legacy spanning three decades, artfully fuses time-honored traditions with avant-garde culinary expertise. Guided by a commitment to excellence, our seasoned chefs orchestrate a symphony of flavors, inviting guests to indulge in a diverse and exquisite menu that transcends the ordinary. Within the opulent ambiance of SwiftBite, patrons embark on a gastronomic odyssey, where each dish tells a story and every bite is a celebration of the culinary arts.
                                </h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center'>
                                <h2 className='text-white text-3xl heading-font'><span style={{ fontFamily: 'Ephesis, cursive' }}>Ros Tailor</span></h2>

                                <p className='heading-font text-[#C9AB81] text-2xl mt-2 mb-4'>CTO</p>
                                <h2 className='text-[#B0B0B0] paragraph-font text-base text-justify mx-auto w-3/4'>In the heart of SwiftBite, where passion meets precision, our culinary artisans curate an unparalleled dining experience. With 30 years of mastery, we have cultivated a menu that echoes our dedication to culinary innovation, ensuring every visit to SwiftBite is a memorable journey through the realms of taste and hospitality. Immerse yourself in the essence of SwiftBite—a sanctuary where culinary expertise, creativity, and a rich heritage converge to create an unforgettable dining adventure.</h2>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='text-center'>
                                <h2 className='text-white text-3xl heading-font'><span style={{ fontFamily: 'Ephesis, cursive' }}>Marcin</span></h2>

                                <p className='heading-font text-[#C9AB81] text-2xl mt-2 mb-4'>Sr shape</p>
                                <h2 className='text-[#B0B0B0] paragraph-font text-base text-justify mx-auto w-3/4'>In the symphony of SwiftBite, the artistry of flavors unfolds, weaving a narrative of excellence and culinary passion. Our dedication to authenticity and the pursuit of gastronomic excellence define SwiftBite, creating a haven for connoisseurs seeking an elevated dining experience. Embark on a gastronomic odyssey, where each dish is a testament to our commitment to crafting moments of indulgence, making SwiftBite not just a restaurant but a destination for culinary enthusiasts.</h2>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
            {/* {second part} */}
            <div className='w-full flex gap-20 py-40 justify-center items-center mx-auto'>
                <div className='w-1/2 text-center'>
                    <h2 className='text-white text-5xl heading-font'>LUNCH TIME:</h2>
                    <p className='text-white paragraph-font text-xl my-4'>Mon - Fri: 12 PM - 2 PM</p>
                </div>
                <div className='w-1/2 text-center'>
                    <h2 className='text-white text-5xl heading-font'>DINNER HOURS:</h2>
                    <p className='text-white paragraph-font text-xl my-4'>Mon - Fri: 7 PM - 9 PM</p>
                </div>
            </div>
            {/* {third part} */}
            <div className='bg-[#14262D] w-full py-20 px-20'>
                <div className='mb-10'>
                    <h2 className='text-white heading-font text-3xl text-center'>CONTACT US</h2>
                    <p className='text-[#C9AB81] heading-font text-5xl text-center my-4'>BOOK A TABLE</p>
                </div>
                <div className='w-full flex items-center justify-center gap-10'>
                    <div className='w-1/2'>
                        <h2 className='mb-3 text-white paragraph-font'>HOW MANY</h2>
                        <Select className='bg-white text-black w-full py-5 rounded-lg paragraph-font' placeholder='Select option'>
                            <option value='option1'>1 People</option>
                            <option value='option2'>2 People</option>
                            <option value='option3'>3 People</option>
                            <option value='option3'>4 People</option>
                            <option value='option3'>5 People</option>
                            <option value='option3'>6 People</option>
                            <option value='option3'>7 People</option>
                            <option value='option3'>8 People</option>
                            <option value='option3'>9 People</option>
                            <option value='option3'>10 People</option>
                        </Select>
                    </div>
                    <div className='w-1/2'>
                        <h2 className='my-4 text-white paragraph-font'>WHAT TIME</h2>
                        <TimePicker className='w-full paragraph-font py-4' minuteStep={15} secondStep={10} hourStep={1} />;
                    </div>
                    <div className='w-1/2'>
                        <div className='mb-7'>
                            <h2 className='my-4 text-white paragraph-font'>WHEN</h2>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    className='bg-white rounded-lg w-full'
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    renderInput={(props) => <input {...props} placeholder="Select date" />}
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookATable;