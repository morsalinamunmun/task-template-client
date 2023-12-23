import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Todo = () => {
    const {user} = useContext(AuthContext);
    //const loadedFoodItems = useLoaderData();
    const [task, setTask] = useState([]);
    console.log(task)
    const url = `https://task-template-server.vercel.app/task?email=${user?.email}`;
   useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data=> setTask(data))
   }, [])
    return (
        <div>
            {
                task.map(isTask=> <div className="" key={isTask._id}>
                    <p>{isTask.task}</p>
                </div>)
            }
        </div>
    );
};

export default Todo;