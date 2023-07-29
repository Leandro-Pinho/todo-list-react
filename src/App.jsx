import React, { useState } from 'react';

// import components
import AddTaskForm from './components/AddTaskForm';
import UpdateForm from './components/UpdateForm';
import ToDo from './components/ToDo';

// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  // tasks (todo list) state
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
    { id: 3, title: "Task 3", status: false }
  ]);

  // temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('')
    }
  }

  // Delete task
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id);
    setToDo(newTasks);
  }

  // Mark task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  }

  // Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry)
  }

  // Update task
  const UpdateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    setUpdateData('');
  }

  return (
    <div className="Container App">
      <h2>To Do List App (ReactJS)</h2>

      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          UpdateTask={UpdateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          addTask={addTask}
          setNewTask={setNewTask}
          newTask={newTask}
        />
      )}


      {/* Display ToDos */}
      {toDo && toDo.length ? '' : 'No Tasks...'}

      <ToDo
        deleteTask={deleteTask}
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
      />

    </div>
  );
}

export default App;
