import { SiCodechef } from "react-icons/si";
import { BiSolidSushi } from "react-icons/bi";
import { Button } from "@chakra-ui/react";
import { GiFruitBowl } from "react-icons/gi";
import { GiDoubleFish } from "react-icons/gi";

const Services = () => {
    return (
        <div className="w-full flex px-10">
            <div className="w-1/2 grid grid-cols-2 gap-6">
                <div>
                    <div className="border-[#C9AB81] border-4 rounded-full w-32 h-32 flex items-center justify-center">
                        <span className="text-[#C9AB81] text-7xl"><SiCodechef></SiCodechef></span>
                    </div>
                    <div>
                        <h2 className="text-white heading-font text-xl tracking-widest my-4">Skilled Chefs</h2>
                        <p className="text-[#B0B0B0] text-justify paragraph-font mb-4 ">Skilled Chefs is a culinary haven, where expertise meets innovation. Unleash your passion for cooking with our curated collection of expert tips, inspiring recipes, and creative techniques.</p>
                        <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5'>
                            <span className='tracking-wider heading-font'>More View</span>
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="border-[#C9AB81] border-4 rounded-full w-32 h-32 flex items-center justify-center">
                        <span className="text-[#C9AB81] text-5xl"><BiSolidSushi></BiSolidSushi></span>
                    </div>
                    <div>
                        <h2 className="text-white heading-font text-xl tracking-widest my-4">Sushi Special</h2>
                        <p className="text-[#B0B0B0] text-justify paragraph-font mb-4 ">Fresh Products, a paradise for quality and freshness enthusiasts. Dive into a world where the finest ingredients meet a commitment to purity. Explore our curated selection and finest things you ever got.</p>
                        <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5'>
                            <span className='tracking-wider heading-font'>More View</span>
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="border-[#C9AB81] border-4 rounded-full w-32 h-32 flex items-center justify-center">
                        <span className="text-[#C9AB81] text-5xl"><GiFruitBowl></GiFruitBowl></span>
                    </div>
                    <div>
                        <h2 className="text-white heading-font text-xl tracking-widest my-4">Fresh Products</h2>
                        <p className="text-[#B0B0B0] text-justify paragraph-font mb-4 ">Taste the uniqueness, where every sip tells a tale of craftsmanship. Unwind in the cozy ambiance and experience the artistry behind each cocktail. Our mixologists blend innovation. </p>
                        <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5'>
                            <span className='tracking-wider heading-font'>More View</span>
                        </Button>
                    </div>
                </div>

                <div>
                    <div className="border-[#C9AB81] border-4 rounded-full w-32 h-32 flex items-center justify-center">
                        <span className="text-[#C9AB81] text-5xl"><GiDoubleFish></GiDoubleFish></span>
                    </div>
                    <div>
                        <h2 className="text-white heading-font text-xl tracking-widest my-4">Unique Tastes</h2>
                        <p className="text-[#B0B0B0] text-justify paragraph-font mb-4 ">Indulge in the extraordinary at Unique Tastes, where every dish is a masterpiece of flavors. Our culinary artisans blend creativity and tradition, offering a symphony. </p>
                        <Button className='bg-[#C9AB81] hover:bg-black text-black hover:text-white rounded px-2 py-1 mt-5'>
                            <span className='tracking-wider heading-font'>More View</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-1/2 ms-10">
                <img className="rounded-lg" src="https://i.ibb.co/HHN6Bfx/pexels-photo-2067473.jpg" alt="" />
            </div>
        </div>
    );
};

export default Services;