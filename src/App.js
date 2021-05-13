import React, { useState } from "react";
import Header from "./components/header/header"
import AddTask from "./components/add-task/AddTask"
import Task from "./components/task/Task"
import './App.css';

function App() {

  const [tasks, setTask] = useState([])

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE",
    })
    res.status === 200
      ? setTask(tasks.filter((task) => task.id !== id))
      : alert("Error deleting this task")
  }
  return (
    <div className="container">
      <Header />
      <AddTask />
      <Task />
    </div>
  );
}

export default App;
