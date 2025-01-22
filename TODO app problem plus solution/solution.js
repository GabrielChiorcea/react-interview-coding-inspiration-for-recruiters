import React, { useState, useEffect } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]); // List of tasks
  const [currentId, setCurrentId] = useState(0); // Current id
  const [nextId, setNextId] = useState(1); // Next task id
  const [task, setTask] = useState(""); // Current task

  // { id: 1, text: "Example task", completed: false }

  // Function to add a task
  const addTask = (e) => {
    e.preventDefault();
    // TODO: Add the task to the tasks list
    if (currentId < nextId && task !== "") {
      setCurrentId(currentId + 1);
      setTasks([ ...tasks, { id: nextId, text: task, completed: false }]);
      setTask("");
    } else {
      alert("Cannot add a new task, check the id or task text");
    }
    setNextId(nextId + 1);
  };

  // Function to delete a task
  const deleteTask = (id) => {
    // TODO: Delete the task with the given id
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Function to toggle completion
  const toggleComplete = (id) => {
    // TODO: Mark the task as complete/incomplete
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  // Save tasks to localStorage
  useEffect(() => {
    // TODO: Save tasks to localStorage when the tasks list changes
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Load tasks from localStorage
  useEffect(() => {
    // TODO: Load tasks from localStorage on initialization
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }, []);

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          id="task"
          type="text"
          value={task}
          placeholder="Add a task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
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
            <button onClick={() => toggleComplete(task.id)}>Complete</button>
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
