import React, { useState } from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { useHistory } from "react-router-dom";
import './TaskItem.css'; 
import './TaskList.css';

const TaskList = () => {
  const [selectedStatus, setSelectedStatus] = useState(""); 

  const tasks = useSelector((state) => state.tasks);
  const history = useHistory();

  const createTask = () => {
    history.push("/tasks/new");
  };

  return (
    <div className="task-list-container">
      <div className="filter-add-container">
        <div className="filter-container">
          <label htmlFor="statusFilter">Filter by Status</label>
          <select
            id="statusFilter"
            onChange={(e) => setSelectedStatus(e.target.value)}
            value={selectedStatus}
          >
            <option value="">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="add-container">
          <button onClick={createTask}>Add Task</button>
        </div>
      </div>

      <h2>Task List</h2>

      {tasks.length ? (
        <table className="task-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks
              .filter((task) => !selectedStatus || task.status === selectedStatus)
              .map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
          </tbody>
        </table>
      ) : (
        <div className="no-tasks">Task Not Added</div>
      )}
    </div>
  );
};

export default TaskList;
