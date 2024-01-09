import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Button } from '@chakra-ui/react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { Box, Typography } from '@mui/material';

const Banner = () => {
    return (
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
                    <div className='relative'>
                        <img className='brightness-75 relative ' style={{ height: '100vh', objectFit: 'cover', width: '100%' }} src="https://i.ibb.co/xG98ypS/dining-restaurant-2-900x500.jpg" alt="" />

                        <div style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))' }} className="absolute inset-0"></div>

                        <div className='absolute top-44 left-20'>
                            <h2 className='text-white text-7xl heading-font'><span style={{ fontFamily: 'Ephesis, cursive' }}>A</span></h2>

                            <hr className='border-t-2 border-[#C9AB81] w-[280px]' />

                            <h2><Typography display="inline">
                                <Box className='heading-font text-[#C9AB81] text-2xl' sx={{ letterSpacing: 6, display: 'inline-block' }}>CULINARY PLATFORM</Box>
                            </Typography></h2>
                            <h2 className='text-white all-font text-xl tracking-wider'>by</h2>
                            <p>
                                <Typography display="inline">
                                    <Box className='heading-font text-[#C9AB81] text-9xl mt-4' sx={{ letterSpacing: 6, display: 'inline-block' }}>Swift<span style={{ fontFamily: 'Ephesis, cursive' }}>Bite</span></Box>
                                </Typography>
                            </p>
                            <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5' colorScheme='twitter' rightIcon={<FaArrowCircleRight className='' />}>
                                <span className='tracking-wider heading-font'>About SwiftBite</span>
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='brightness-75 relative ' style={{ height: '100vh', objectFit: 'cover', width: '100%' }} src="https://i.ibb.co/m9gwBBG/dining-restaurant-3.jpg" alt="" />

                        <div style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))' }} className="absolute inset-0"></div>

                        <div className='absolute top-44 left-20'>
                            <h2 className='text-white text-7xl heading-font'><span style={{ fontFamily: 'Ephesis, cursive' }}>A</span></h2>

                            <hr className='border-t-2 border-[#C9AB81] w-[280px]' />

                            <h2><Typography display="inline">
                                <Box className='heading-font text-[#C9AB81] text-2xl' sx={{ letterSpacing: 6, display: 'inline-block' }}>CULINARY PLATFORM</Box>
                            </Typography></h2>
                            <h2 className='text-white all-font text-xl tracking-wider'>by</h2>
                            <p>
                                <Typography display="inline">
                                    <Box className='heading-font text-[#C9AB81] text-9xl mt-4' sx={{ letterSpacing: 6, display: 'inline-block' }}>Swift<span style={{ fontFamily: 'Ephesis, cursive' }}>Bite</span></Box>
                                </Typography>
                            </p>
                            <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5' colorScheme='twitter' rightIcon={<FaArrowCircleRight className='' />}>
                                <span className='tracking-wider heading-font'>About SwiftBite</span>
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='brightness-75 relative ' style={{ height: '100vh', objectFit: 'cover', width: '100%' }} src="https://i.ibb.co/RHT4Szr/dining-restaurant-5.jpg" alt="" />

                        <div style={{ background: 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))' }} className="absolute inset-0"></div>

                        <div className='absolute top-44 left-20'>
                            <h2 className='text-white text-7xl heading-font'><span style={{ fontFamily: 'Ephesis, cursive' }}>A</span></h2>

                            <hr className='border-t-2 border-[#C9AB81] w-[280px]' />

                            <h2><Typography display="inline">
                                <Box className='heading-font text-[#C9AB81] text-2xl' sx={{ letterSpacing: 6, display: 'inline-block' }}>CULINARY PLATFORM</Box>
                            </Typography></h2>
                            <h2 className='text-white all-font text-xl tracking-wider'>by</h2>
                            <p>
                                <Typography display="inline">
                                    <Box className='heading-font text-[#C9AB81] text-9xl mt-4' sx={{ letterSpacing: 6, display: 'inline-block' }}>Swift<span style={{ fontFamily: 'Ephesis, cursive' }}>Bite</span></Box>
                                </Typography>
                            </p>
                            <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5' colorScheme='twitter' rightIcon={<FaArrowCircleRight className='' />}>
                                <span className='tracking-wider heading-font'>About SwiftBite</span>
                            </Button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;