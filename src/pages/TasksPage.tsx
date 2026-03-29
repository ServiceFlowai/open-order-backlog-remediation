import React, { useState } from 'react';

const TasksPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, orderId: 'ORD123', customer: 'Acme Corp', status: 'New', priority: 'High' },
    { id: 2, orderId: 'ORD124', customer: 'Globex Inc', status: 'In Progress', priority: 'Medium' },
  ]);

  return (
    <div className="tasks-page">
      <h1>Agent Tasking Workspace</h1>
      <div className="task-list">
        {tasks.map(task => (
          <div key={task.id} className="task-card">
            <h2>Order ID: {task.orderId}</h2>
            <p>Customer: {task.customer}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;