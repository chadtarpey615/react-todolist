import React, { useState, useEffect } from 'react';
import api from "../../utils/api"

import Button from "../button/button"

export default function AddTask() {

    const [tasks, setTasks] = useState({});

    useEffect(() => {
        console.log(tasks)
    })
    const handleInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target
        setTasks({ ...tasks, [name]: value })
        console.log(tasks)

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hit")
        api.saveTask({
            id: Math.floor(Math.random() * 1000) + 1,
            title: tasks.title,
            date: tasks.date,
            task: tasks.task
        })
            .then(() => setTasks({
                id: "",
                title: "",
                date: "",
                task: ""
            }))

            .catch((err) => console.log(err))



    }



    return (
        <form >
            <div className="form-control">
                <label htmlFor="title">Title</label>
                <input onChange={handleInput} type="text" name="title" placeholder="enter title" />
            </div>
            <div className="form-control">
                <label htmlFor="date">Date</label>
                <input onChange={handleInput} type="text" name="date" placeholder="enter date" />
            </div>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input onChange={handleInput} type="text" name="task" placeholder="enter task" />
            </div>
            <div className="btn">
                <button onClick={handleSubmit}>Add Task</button>
            </div>

        </form>
    )
}
