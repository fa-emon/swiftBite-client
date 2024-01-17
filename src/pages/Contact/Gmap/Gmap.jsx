

const Gmap = () => {
    return (
        <div className="mt-32 px-10">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    title="Google Maps"
                    className="embed-responsive-item"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254498.04829359613!2d24.689043431138106!3d60.11009634066814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920bc796210691%3A0xcd4ebd843be2f763!2sHelsinki%2C%20Finland!5e0!3m2!1sen!2sbd!4v1705471382825!5m2!1sen!2sbd"
                    width="100%"
                    height="600"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Gmap;
