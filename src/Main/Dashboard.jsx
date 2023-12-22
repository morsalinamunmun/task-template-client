
const Dashboard = () => {
    const handleAddTask = ()=>{

    }
    return (
        <div>
            <form className="card-body mx-40" onSubmit={handleAddTask}>
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
                            <input className="bg-orange-500 rounded-lg p-3 text-white" type="addTask" value="Add Task" />
                        </div>
                        
                    </form>
        </div>
    );
};

export default Dashboard;