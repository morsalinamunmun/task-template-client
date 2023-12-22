import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Dashboard = () => {
    const handleAddTask = ()=>{

    }
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <ul className="font-bold flex gap-20 bg-orange-500 text-white">
                    
                    <li><NavLink to='/dashboard/todo'>Todo</NavLink></li>
                    <li><NavLink to='/dashboard/ongoing'>Ongoing</NavLink></li>
                    <li><NavLink to='/dashboard/complete'> Completed</NavLink></li>
            </ul>
            <form className="card-body md:mx-40" onSubmit={handleAddTask}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Task</span>
                            </label>
                            <input type="email" name="text" placeholder="text" className="input border-orange-500 border-2" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Number</span>
                            </label>
                            <input type="number" name="number" placeholder="Number" className="input border-orange-500 border-2"/>
                        </div>
                        <div className="form-control mt-6">
                            <input className="bg-orange-500 rounded-lg p-3 text-white cursor-pointer" type="addTask" value="Add Task" />
                        </div>
                        
                    </form>

                
            {/* <div className="flex-1">
                <Outlet></Outlet>
            </div> */}
        </div>

    );
};

export default Dashboard;