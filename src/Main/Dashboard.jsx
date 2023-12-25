import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
    const userTask = useLoaderData();
    const {imgUrl, name} = userTask;
    console.log(name)
    const { user } = useContext(AuthContext);
    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const imgUrl = form.imgUrl.value;
        const task = form.task.value;
        const number = form.number.value;
        const taskInfo = { task, number, name, imgUrl }

        //send form data to server
        fetch('https://task-template-server.vercel.app/task', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(taskInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Application send successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }
            })
    }
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <ul className="font-bold flex gap-20 bg-orange-500 text-white p-2">

                <li><NavLink to='/dashboard/todo' className="focus:bg-orange-300">Todo</NavLink></li>
                <li><NavLink to='/dashboard/ongoing'>Ongoing</NavLink></li>
                <li><NavLink to='/dashboard/complete'> Completed</NavLink></li>
            </ul>
            <div className="flex">
                <div className="bg-orange-500 p-20 text-white">
                    <img src={imgUrl} alt="" />
                    <h2>{name}</h2>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="">
                        <Outlet></Outlet>
                    </div>
                    <div className="lg:w-72">
                        <form className="card-body w-full" onSubmit={handleAddTask}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" defaultValue={user?.name} className="input border-orange-500 border-2" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>
                                <input type="text" name="imgUrl" defaultValue={user?.photoURL} readOnly placeholder="Image Url" className="input border-orange-500 border-2" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Task</span>
                                </label>
                                <input type="text" name="task" placeholder="text" className="input border-orange-500 border-2" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Number</span>
                                </label>
                                <input type="number" name="number" placeholder="Number" className="input border-orange-500 border-2" />
                            </div>
                            <div className="form-control mt-6">
                                <input className="bg-orange-500 rounded-lg p-3 text-white cursor-pointer" type="submit" value="Add Task" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Dashboard;