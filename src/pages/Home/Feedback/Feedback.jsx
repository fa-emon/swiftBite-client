import './Feedback.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'animate.css';


const Feedback = () => {
    return (
        <div className="flex w-full px-10 mt-32">
            <div className="w-1/2 me-10">
                <img className=" object-cover feedback-image feedback-image:hover feedback-image:hover:hover" src="https://i.ibb.co/zRkTv9H/pexels-jonathan-borba-3009323-removebg-preview.png" alt="" />
            </div>
            <div className="w-1/2">
                <div>
                    <h2 className='small-font text-4xl text-[#C9AB81]'>Client Feedback</h2>
                    <p className='heading-font text-5xl my-4'>What believe <span className='text-[#C9AB81]'>our customers</span></p>
                    <img className="mt-6" src="https://i.ibb.co/cNdRzDK/title-icon.png" alt="" />
                    <p className='paragraph-font text-[#B0B0B0] text-justify w-3/4 my-6'> Believing in our customers is at the core of our commitment to providing exceptional service and building lasting relationships.</p>
                </div>
                <div>
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
                    <div className='flex items-center justify-between'>
                        <img className="rounded-full shadow-2xl border-4 border-solid border-[#C9AB81] animate__animated animate__fadeInLeft w-48 h-48 object-cover brightness-75" src="https://i.ibb.co/4J2FTJ9/pexels-photo-2011858.jpg" alt="" />

                        <div className='ms-10'>
                            <h2 className='text-white text-3xl heading-font'><span style={{ fontFamily: 'Ephesis, cursive' }}>Flor Waross</span></h2>

                            <p className='heading-font text-[#C9AB81] text-2xl mt-2 mb-4'>CEO</p>
                            <h2 className='text-[#B0B0B0] paragraph-font text-base text-justify w-3/4'>Impressed by the warm ambiance and delectable dishes at swiftBite. The staff friendliness added a personal touch, making it a memorable visit. Highly recommended!</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-between'>
                        <img className="rounded-full shadow-2xl border-4 border-solid border-[#C9AB81] animate__animated animate__fadeInLeft w-48 h-48 object-cover brightness-75" src="https://i.ibb.co/Nt9GQpb/pexels-photo-3656518.jpg" alt="" />

                        <div className='ms-10'>
                            <h2 className='text-white text-3xl heading-font'><span style={{ fontFamily: 'Ephesis, cursive' }}>Ros Tailor</span></h2>

                            <p className='heading-font text-[#C9AB81] text-2xl mt-2 mb-4'>CTO</p>
                            <h2 className='text-[#B0B0B0] paragraph-font text-base text-justify w-3/4'>swiftBite exceeded all expectations. From the inviting atmosphere to the mouthwatering flavors, every aspect was outstanding. A true gem for those seeking a top-notch dining experience.</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-between'>
                        <img className="rounded-full shadow-2xl border-4 border-solid border-[#C9AB81] animate__animated animate__fadeInLeft w-48 h-48 object-cover brightness-75" src="https://i.ibb.co/Mpk375f/pexels-photo-1739580.jpg" alt="" />

                        <div className='ms-10'>
                            <h2 className='text-white text-3xl heading-font'><span style={{ fontFamily: 'Ephesis, cursive' }}>Marcin</span></h2>

                            <p className='heading-font text-[#C9AB81] text-2xl mt-2 mb-4'>Sr shape</p>
                            <h2 className='text-[#B0B0B0] paragraph-font text-base text-justify w-3/4'>Exceptional service! The swiftBite team surpassed my expectations with their delightful menu and impeccable attention to detail. A dining experience worth revisiting.</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
                </div>
            </div>
        </div>
    );
};

export default Feedback;