import React, { useState, useEffect } from "react";
import Header from "./components/header/header"
import AddTask from "./components/add-task/AddTask"
import Task from "./components/task/Task";
import api from "./utils/api"
import './App.css';

function App() {

  const [task, setTask] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await getData();
      setTask(taskFromServer)
    }
    getTask();
  }, [])

  const getData = async () => {
    const apiUrl = "http://localhost:4000/tasks";

    const response = await fetch(apiUrl)
    const data = await response.json();

    return data;

  }

  const handleInput = (event) => {
    event.preventDefault();
    const { name, value } = event.target
    setTask({ ...task, [name]: value })
    console.log(task)

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hit")
    api.saveTask({
      id: Math.floor(Math.random() * 1000) + 1,
      title: task.title,
      date: task.date,
      task: task.task
    })
      .then(() => setTask({
        id: "",
        title: "",
        date: "",
        task: ""
      }))

      .catch((err) => console.log(err))



  }

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE",
    })
    res.status === 200
      ? setTask(task.filter((task) => task.id !== id))
      : alert("Error deleting this task")
  }
  return (
    <div className="container">
      <Header handleSubmit={handleSubmit} />
      <AddTask handleInput={handleInput} />
      <Task task={task} />
    </div>
  );
}

export default App;
