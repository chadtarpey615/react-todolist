import React, { useState, useEffect } from 'react'
// import Button from "../button/button"
import axios from "axios";
export default function AddTask(props) {

    const [task, setTask] = useState({});

    useEffect(() => {
        console.log(task)
    })
    const handleInput = (event) => {
        event.preventDefault()
        const { name, value } = event.target
        setTask({ ...task, [name]: value })
        console.log(name)
        // const data = {
        //     id: "4",
        //     title: name,
        //     date: Date.now,
        //     task: name.task

        // }
        // const baseUrl = "http://localhost:4000/tasks";
        // axios.post(baseUrl + data)
        //     .then((res) => res.stringify())
        //     .catch((err) => console.log(err))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const baseUrl = "http://localhost:4000/tasks";
        axios.post(baseUrl, {
            id: Math.floor(Math.random() * 100),
            title: task.title,
            date: task.date,
            task: task.task
        })
            .catch((err) => console.log(err))
    }

    return (
        <form >
            <div className="form-control">
                <label for="title">Title</label>
                <input onChange={handleInput} type="text" name="title" placeholder="enter title" />
            </div>
            <div className="form-control">
                <label for="date">Date</label>
                <input onChange={handleInput} type="text" name="date" placeholder="enter date" />
            </div>
            <div className="form-control">
                <label for="task">Task</label>
                <input onChange={handleInput} type="text" name="task" placeholder="enter task" />
            </div>

            <div className="btn">
                <button onSubmit={handleSubmit}>Add Task</button>
            </div>
        </form>
    )
}
