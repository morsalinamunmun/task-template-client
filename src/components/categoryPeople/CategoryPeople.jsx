import { Link } from "react-router-dom";

const CategoryPeople = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/BfFVxCS/istockphoto.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">SCC Technovision Inc Office Task!</h1>
                        <p className="py-6">Welcome to SCC Technovision Inc.'s Task Management Platform – a versatile solution designed to elevate task organization and efficiency. Our user community is as diverse as the professions that make up the global workforce. From innovative developers shaping the digital landscape to dynamic corporate professionals managing multifaceted projects, and astute bankers orchestrating financial strategies, our platform caters to a broad spectrum of users.</p>
                        <Link to='/benefit' className="btn bg-orange-500 border-0 text-white">Who can Benefit</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPeople;