
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const menus = <>
              <li><NavLink to='/' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-orange-500 border-r-2 border-orange-500 pr-2" : ""}>Home</NavLink></li>
              <li><NavLink to='/available' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-orange-500 border-r-2 border-orange-500 pr-2" : ""}>Available Foods</NavLink></li>
              <li><NavLink to='/add' className={({isActive, isPending})=> isPending ? "pending" : isActive ? "text-orange-500 border-r-2 border-orange-500 pr-2" : ""}>Add Food</NavLink></li>
              {/* <li><NavLink to='/login' className='border-orange-500 rounded-lg'>Log In</NavLink></li> */}
    </>


// const handleLogOut = ()=>{
//     logOut()
//     .then(()=> console.log('logout'))
//     .catch(error=> console.error(error))
// }
    return (
        <div className="navbar bg-base-100 ">
            <div className="lg:w-[30%]">
                <div className="dropdown mr-10 md:mr-40 lg:mr-0">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menus}                    
                    </ul>
                </div>
                {/* <img className="w-14" src={logo} alt="" /> */}
                <Link to='/' className="ml-3 font-semibold normal-case text-xl"><span className="text-orange-500">Food</span> Donation</Link>
            </div>
            <div className="w-[70%] lg:ml-64 hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {menus}
                </ul>  
            </div>
        </div>
    );
};

export default Navbar;