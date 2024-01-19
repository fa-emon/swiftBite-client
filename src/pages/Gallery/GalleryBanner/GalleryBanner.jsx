import './GalleryBanner.css'

const GalleryBanner = () => {
    return (
        <div className="banner-container mb-32">
            <img style={{ height: '100vh', objectFit: 'cover', width: '100%' }} className="w-full" src="https://i.ibb.co/0Ddmrrr/pexels-photo-5663309.jpg" alt="" />
        </div>
    );
};

export default GalleryBanner;