import { Box, Typography } from '@mui/material';
import { Col, Row } from 'antd';

const GalleryImage = () => {
    return (
        <div className="">
            <div className='flex flex-col text-start px-20 mb-4'>
                <h2 className='my-2'>
                    <Typography display="inline">
                        <Box className='heading-font uppercase heading-font text-2xl font-bold text-[#C9AB81]' sx={{ letterSpacing: 4, display: 'inline-block' }}>Gallery</Box>
                    </Typography>
                </h2>
                <hr className='w-[100px] border-[#C9AB81] border-b-2 rounded-b-full mb-3' />
            </div>

            <div className='w-full px-20'>
                <Row gutter={[16, 24]}>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src='https://i.ibb.co/LvXf91P/dining-restaurant-4-900x500.jpg' alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src='https://i.ibb.co/0ZJqjRH/pexels-photo-397913.jpg' alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src='https://i.ibb.co/X2D89tx/pexels-photo-1673876.jpg' alt="" />
                    </Col>

                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src='https://i.ibb.co/4RtS9Mb/pexels-photo-1833349.jpg' alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src='https://i.ibb.co/3CV31mj/pexels-photo-3298180.jpg' alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src='https://i.ibb.co/1GKmNVM/pexels-photo-1028425.jpg' alt="" />
                    </Col>

                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src='https://i.ibb.co/zJkyFXj/free-photo-of-dinner-with-beef-and-vegetables.jpg' alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-300 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src='https://i.ibb.co/yXRp7g9/free-photo-of-person-eating-chocolate-cake-with-fruits-and-cream.jpg' alt="" />
                    </Col>
                    <Col span={8}>
                        <img className="object-cover transform hover:scale-105 transition-transform duration-500 hover:brightness-90" style={{ height: '50vh', width: '60vh', objectFit: 'cover' }} src='https://i.ibb.co/NrJcYY0/pexels-photo-10540968.jpg' alt="" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default GalleryImage;