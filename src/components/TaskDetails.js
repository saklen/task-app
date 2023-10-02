
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../actions/taskActions";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './TaskDetails.css'; 


const TaskDetails = ({ match }) => {
  const history = useHistory();
  const taskId = parseInt(match.params.id);
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    dispatch(editTask(editedTask));
    history.push('/')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="container">
    <h2>Task Details</h2>
    Title 
    <input
      type="text"
      name="title"
      value={editedTask.title}
      onChange={handleChange}
    />
   
   
    Description  <textarea
      name="description"
      value={editedTask.description}
      onChange={handleChange}
    />
     <p>Due Date 
      <input
        type="date"
        name="dueDate"
        value={editedTask.dueDate}
        onChange={handleChange}
      />
    </p>
     <p>Status :
      <select name="status" value={editedTask.status} onChange={handleChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </p>
    <button onClick={handleEdit}>Save Changes</button>
    
  </div>

  );
};

export default TaskDetails;
