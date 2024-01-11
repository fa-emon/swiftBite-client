import { Button } from '@chakra-ui/react';
import { Box, Typography } from '@mui/material';


const Reservations = () => {
    return (
        <div className="flex w-full px-10 my-32">
            <div className="w-1/2 me-10">
                <img style={{ height: '100vh', objectFit: 'cover', width: '95%' }} className="rounded-lg brightness-75" src="https://i.ibb.co/Msn3vQB/pexels-photo-2403391.jpg" alt="" />
            </div>

            <div className="w-1/2">
                <Typography display="inline">
                    <Box className='small-font text-4xl text-[#C9AB81]' sx={{ letterSpacing: 20, display: 'inline-block' }}>Reservations</Box>
                </Typography>
                <h2 className="text-[#B0B0B0] text-5xl heading-font mt-8">Better food <span className="text-[#C9AB81]">forever</span> </h2>
                <img className="my-4" src="https://i.ibb.co/cNdRzDK/title-icon.png" alt="" />
                <p className='paragraph-font text-[#B0B0B0] text-justify w-3/4'> Book your table now for a culinary journey like no other. Reserve your moment of indulgence at SwiftBite.</p>
                <div className='flex mb-6'>
                    <div className='me-44'>
                        <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5'>
                            <span className='tracking-wider heading-font'>Book a Table</span>
                        </Button>
                    </div>

                    <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5'>
                        <span className='tracking-wider heading-font'>Special Food</span>
                    </Button>
                </div>

                <div className="w-full flex p-10">
                    <div className="w-1/2">
                        <h2 className="heading-font text-white text-5xl">BOOK A <span className="text-[#C9AB81]">TABLE</span> </h2>

                        <p className='text-[#B0B0B0]  paragraph-font mt-10'>reserve your table to savor the sophistication of our exquisite dishes amidst an ambiance of refined elegance.</p>
                    </div>
                    <div className="w-1/2">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservations;