import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
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
                    <img className='brightness-75 relative ' style={{ height: '100vh', objectFit: 'cover', width: '100%' }} src="https://i.ibb.co/xG98ypS/dining-restaurant-2-900x500.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='brightness-75 relative ' style={{ height: '100vh', objectFit: 'cover', width: '100%' }} src="https://i.ibb.co/m9gwBBG/dining-restaurant-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='brightness-75 relative ' style={{ height: '100vh', objectFit: 'cover', width: '100%' }} src="https://i.ibb.co/RHT4Szr/dining-restaurant-5.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;