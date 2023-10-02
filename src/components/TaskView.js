import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../actions/taskActions";
import { useHistory } from "react-router-dom";
import './TaskView.css'; 


const TaskView = ({ match }) => {
    const history = useHistory();
  const taskId = parseInt(match.params.id);
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === taskId)
  );
  const dispatch = useDispatch();
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    dispatch(editTask(editedTask));
    history.push("/")
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
    <div>
      <h2>Task Details</h2>
      <h3>Task Title : {task.title}</h3>
      <p>Status: 
      <select name="status" value={editedTask.status} onChange={handleChange} className="status">
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </p>
      <p>Due Date: {task.dueDate}</p>
     <p>Description : {task.description}</p>
      <button onClick={handleEdit}>Save Changes</button>
    </div>
  );
};

export default TaskView;
