import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {

  // tasks (todo list) state
  const [toDo, setToDo] = useState([
    { "id": 1, "title": "Task 1", "status": false },
    { "id": 2, "title": "Task 2", "status": false },
    { "id": 3, "title": "Task 3", "status": false }
  ]);

  // temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task
  const addTask = () => {

  }

  // Delete task
  const deleteTask = (id) => {

  }

  // Mark task as done or completed
  const markDone = () => {

  }

  // Cancel update
  const cancelUpdate = () => {

  }

  // Change task for update
  const changeTask = (e) => {

  }

  // Update task
  const UpdateTask = () => {

  }

  return (
    <div className="Container App">
      <h2>To Do List App (ReactJS)</h2>

      {/* update task input */}
      <div className="row">
        <div className="col">
          <input type="text" className='form-control form-control-lg' />
        </div>
        <div className="col-auto">
          <button className='btn btn-lg btn-success mr-20'>Update</button>
          <button className='btn btn-lg btn-warning'>Cancel</button>
        </div>
      </div>
      <br />

      {/* new task input */}
      <div className="row">
        <div className="col">
          <input type="text" className='form-control form-control-lg' />
        </div>
        <div className="col-auto">
          <button className='btn btn-lg btn-success'>Add Task</button>
        </div>
      </div>
      <br />

      {/* Display ToDos */}
      {toDo && toDo.length ? '' : 'No Tasks...'}

      {toDo && toDo
        // ordenando a listagem do primeiro para o ultimo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map((task, index) => {
          return (
            <React.Fragment key={task.id}>
              <div className="col taskBg">
                <div className={task.status ? 'done' : ''}>
                  <span className='taskNumber'>{index + 1}</span>
                  <span className='taskText'>{task.title}</span>
                </div>
                <div className="iconWrap">
                  <span title="Completed / Not Completed"><FontAwesomeIcon icon={faCircleCheck} /></span>
                  <span title="Edit"><FontAwesomeIcon icon={faPen} /></span>
                  <span title='Delete'><FontAwesomeIcon icon={faTrashCan} /></span>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }

    </div>
  );
}

export default App;
