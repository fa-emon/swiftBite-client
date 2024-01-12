import { Button } from '@chakra-ui/react';
import './Blog.css'

const Blog = () => {
    return (
        <div className="w-full mt-32 px-10">
            <div>
                <h2 className='text-4xl text-[#C9AB81] small-font'>Blog</h2>
                <h2 className='text-white heading-font text-5xl my-4'>Latest <span className='text-[#C9AB81]'>Update</span> </h2>
                <img className="my-6" src="https://i.ibb.co/cNdRzDK/title-icon.png" alt="" />
                <p className='paragraph-font text-[#B0B0B0] w-1/2 text-justify mb-8'>Experience the culinary artistry at swiftBite, where each dish is a masterpiece of taste, crafted with passion to elevate your dining pleasure.</p>
                <img src="" alt="" />
                <p></p>
            </div>
            <div className="flex w-full items-center justify-between">
                <div className="w-1/2 me-10">
                    <div className="card w-full shadow-xl">
                        <figure><img className="brightness-90" src="https://i.ibb.co/PWMhkGB/pexels-photo-842545.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className='heading-font text-[#B0B0B0] text-4xl'>Make a proper salad with high proteins.</p>
                            <p className='paragraph-font text-[#C9AB81] my-2'>A vibrant and refreshing salad, bursting with crisp greens, colorful vegetables, and a zesty dressing that elevates freshness to a delightful dining experience.</p>
                            <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5'>
                                <span className='tracking-wider heading-font'>More View</span>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="card w-full shadow-xl">
                        <figure><img className='brightness-90' src="https://i.ibb.co/cQQ5zyX/pexels-photo-688804.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <p className='heading-font text-[#B0B0B0] text-4xl'>Make the eggplant dish for mashroom.</p>
                            <p className='paragraph-font text-[#C9AB81] my-2'>Savor the rich and earthy goodness of sautéed mushrooms with garlic, herbs, and a touch of balsamic, creating a savory delight in just one pan and it cozy.</p>
                            <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5'>
                                <span className='tracking-wider heading-font'>More View</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;