
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";
import { Link ,useHistory } from "react-router-dom";
import './TaskForm.css'; 


const TaskForm = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    id: Date.now(), 
    title: "",
    description: "",
    dueDate: "",
    status: "To Do",
  });

  const handleSubmit = () => {
    newTask.title.length > 0 &&
    dispatch(addTask(newTask));
    setNewTask({
      id: Date.now(), 
      title: "",
      description: "",
      dueDate: "",
      status: "To Do",
    });
    history.push("/");

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <h2>Create New Task</h2>
      Title <input
        type="text"
        name="title"
        placeholder="Title"
        value={newTask.title}
        onChange={handleChange}
      />
      <br/>
     Description  <textarea
        name="description"
        placeholder="Description"
        value={newTask.description}
        onChange={handleChange}
      />
      <br/>
     Due Date  <input
        type="date"
        name="dueDate"
        value={newTask.dueDate}
        onChange={handleChange}
      />
      <br/>
     Status  <select name="status" value={newTask.status} onChange={handleChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <br/>
      <button onClick={handleSubmit}>Create Task</button>
    

    </div>
  );
};

export default TaskForm;
