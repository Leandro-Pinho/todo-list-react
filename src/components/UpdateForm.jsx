import React from 'react'

const UpdateForm = ({ UpdateTask, cancelUpdate, updateData, changeTask }) => {
    return (
        <>
            {/* update task input */}
            <div className="row">
                <div className="col">
                    <input
                        type="text"
                        value={updateData && updateData.title}
                        onChange={(e) => changeTask(e)}
                        className='form-control form-control-lg'
                    />
                </div>
                <div className="col-auto">
                    <button onClick={UpdateTask} className='btn btn-lg btn-success mr-20'>Update</button>
                    <button onClick={cancelUpdate} className='btn btn-lg btn-warning'>Cancel</button>
                </div>
            </div>
            <br />
        </>
    )
}

export default UpdateForm
