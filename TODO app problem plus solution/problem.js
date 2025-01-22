import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]); // List of tasks
  const [task, setTask] = useState(""); // Current task

  // Function to add a task
  const addTask = (e) => {
    // TODO: Add the task to the tasks list
  };

  // Function to delete a task
  const deleteTask = (id) => {
    // TODO: Delete the task with the given id
  };

  // Function to toggle task completion
  const toggleComplete = (id) => {
    // TODO: Mark the task as complete/incomplete
  };

  // Save tasks to localStorage
  useEffect(() => {
    // TODO: Save tasks to localStorage when the tasks list changes
  }, [tasks]);

  // Load tasks from localStorage
  useEffect(() => {
    // TODO: Load tasks from localStorage on initialization
  }, []);


  return (
    <div className="container">
      <h1>To-Do List</h1>
        <input
          id="task"
          type="text"
          value={task}
          placeholder="Add a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() => toggleComplete(task.id)}
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
<style>

  {`
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  color: #333;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  background: #fff;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
}

h1 {
  text-align: center;
  color: #6c63ff;
  margin-bottom: 20px;
}

form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

button {
  padding: 10px 15px;
  background-color: #6c63ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #4b42d5;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

li span {
  cursor: pointer;
}

li span:hover {
  color: #6c63ff;
}

li button {
  background-color: #ff6b6b;
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 5px;
}

li button:hover {
  background-color: #d54a4a;
}

li button:last-child {
  background-color: #6c63ff;
}

li button:last-child:hover {
  background-color: #4b42d5;
}

`}
</style>

    </div>
  );
};

export default TodoApp;
