import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTask } from "../actions/taskActions";
import './TaskItem.css'; 

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    history.push(`/tasks/${task.id}/edit`);  
  };

  return (
    <tr className="task-item">
      <td>
        <Link to={`/view/${task.id}`} className="link">{task.title}</Link>
      </td>
      <td>{task.status}</td>
      <td>{task.dueDate}</td>
      <td>
        <button className="edit-button" onClick={handleEdit}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskItem;
