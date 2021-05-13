import React, { useState, useEffect } from 'react'
import Button from "../button/button"

export default function AddTask({ handleInput }) {

    // const [tasks, setTasks] = useState({});

    // useEffect(() => {
    //     console.log(task)
    // })
    // const handleInput = (event) => {
    //     event.preventDefault();
    //     const { name, value } = event.target
    //     setTasks({ ...tasks, [name]: value })
    //     console.log(tasks)

    // }



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


        </form>
    )
}
