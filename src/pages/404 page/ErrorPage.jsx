import Lottie from 'lottie-react';
import errorPage from '../../../src/lottieAnimation/404.json'
import { Button } from '@mui/material';
import { MdHome } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ErrorPage = () => {
    const navigate = useNavigate();

    const handlehome = () => {
        navigate('/');
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Lottie animationData={errorPage} loop={true}></Lottie>
            <Typography component="div">
                <Box sx={{ letterSpacing: 4, m: 1 }}>
                    <h2 className='heading-font text-xl font-semibold text-[#B0B0B0]'>I am very sleepy,please go <Button onClick={handlehome} variant="contained" endIcon={<MdHome></MdHome>} style={{ background: purple[500] }} all-font>Home</Button></h2>
                </Box>
            </Typography>
        </div>
    );
};

export default ErrorPage;