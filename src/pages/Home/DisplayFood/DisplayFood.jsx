import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const DisplayFood = () => {
    return (
        <div className='px-10'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="object-contain transform hover:scale-105 transition-transform duration-300 hover:brightness-50" src="https://i.ibb.co/2qYrfcx/food-slider-02.png" alt="" />
                    <div className='text-center mt-6'>
                        <h2 className='heading-font text-4xl text-[#B0B0B0]'>Tomato Soup</h2>
                        <p className='text-[#C9AB81] small-font text-3xl tracking-wider mt-2'>Food</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-contain transform hover:scale-105 transition-transform duration-300 hover:brightness-50" src="https://i.ibb.co/LCVJtmh/food-slider-01.png" alt="" />
                    <div className='text-center mt-6'>
                        <h2 className='heading-font text-4xl text-[#B0B0B0]'>Egg Week</h2>
                        <p className='text-[#C9AB81] small-font text-3xl tracking-wider mt-2'>Food</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-contain transform hover:scale-105 transition-transform duration-300 hover:brightness-50" src="https://i.ibb.co/r2SDkJ3/food-slider-05.png" alt="" />
                    <div className='text-center mt-6'>
                        <h2 className='heading-font text-4xl text-[#B0B0B0]'>Sponge Cake</h2>
                        <p className='text-[#C9AB81] small-font text-3xl tracking-wider mt-2'>Food</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-contain transform hover:scale-105 transition-transform duration-300 hover:brightness-50" src="https://i.ibb.co/RcSMV7R/food-slider-03.png" alt="" />
                    <div className='text-center mt-6'>
                        <h2 className='heading-font text-4xl text-[#B0B0B0]'>Prawn Bisque</h2>
                        <p className='text-[#C9AB81] small-font text-3xl tracking-wider mt-2'>Food</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-contain transform hover:scale-105 transition-transform duration-300 hover:brightness-50" src="https://i.ibb.co/r4bbzmj/food-slider-04.png" alt="" />
                    <div className='text-center mt-6'>
                        <h2 className='heading-font text-4xl text-[#B0B0B0]'>Duck Confit</h2>
                        <p className='text-[#C9AB81] small-font text-3xl tracking-wider mt-2'>Food</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="object-contain transform hover:scale-105 transition-transform duration-300 hover:brightness-50" src="https://i.ibb.co/qp8bH1r/food-slider-06.png" alt="" />
                    <div className='text-center mt-6'>
                        <h2 className='heading-font text-4xl text-[#B0B0B0]'>Fish Steak</h2>
                        <p className='text-[#C9AB81] small-font text-3xl tracking-wider mt-2'>Food</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default DisplayFood;