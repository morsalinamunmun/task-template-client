import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/SnXQRDg/office-banner.webp)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md" data-aos="fade-up"
                        data-aos-duration="3000">
                        <h1 className="mb-5 text-5xl font-bold">Welcome Our community</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/login' className="btn bg-orange-500 border-0 text-white">Let’s Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;