import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Todo = () => {
    const { user } = useContext(AuthContext);
    //const loadedFoodItems = useLoaderData();
    const [task, setTask] = useState([]);
    console.log(task)
    const url = `https://task-template-server.vercel.app/task?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])

    const handleEdit = () => {

    }

    const handleDelete = (_id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://task-template-server.vercel.app/task/${_id}`, {
                method: "DELETE"
              })
              .then(res=> res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Task Deleted.',
                        'success'
                    )   
                    const remaining = task.filter(cancelRequest=> cancelRequest.id !== _id)
                    setTask(remaining); 
                }
              })
            }
          })
    }
    return (
        <div>
            {
                task.map(isTask => <div className="mt-5" key={isTask._id}>
                    <h2 className="text-xl font-bold">Task</h2>
                    <div className="space-y-5">
                        <p>{isTask.task}</p>
                        <div className="flex gap-5">
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="bg-orange-500 px-2 py-1 text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Edit</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <form className="card-body w-72" onSubmit={handleEdit}>
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
                            </dialog>
                            <button onClick={()=>handleDelete(task._id)} className="bg-red-500 px-2 py-1 text-white">Delete</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Todo;