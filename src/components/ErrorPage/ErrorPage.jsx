import { Link } from "react-router-dom";
import error from '../../assets/404-image.jpg'
const ErrorPage = () => {
    return (
        <div className="text-center space-y-5 py-16">
            <h2 className="text-2xl font-bold ">Oops!!! This page Not Available</h2>
            <img className="flex mx-auto w-1/2" src={error} alt="" />
            <Link to="/" className="text-sky-500 underline">go Back to home</Link>
        </div>
    );
};

export default ErrorPage;