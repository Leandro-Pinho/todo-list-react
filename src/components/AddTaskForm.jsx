import React from 'react'

const AddTaskForm = ({ newTask, addTask, setNewTask }) => {
    return (
        <>
            {/* new task input */}
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className='form-control form-control-lg'
                    />
                </div>
                <div className="col-auto">
                    <button
                        onClick={addTask}
                        className='btn btn-lg btn-success'
                    >
                        Add Task
                    </button>
                </div>
            </div>
            <br />
        </>
    )
}

export default AddTaskForm
