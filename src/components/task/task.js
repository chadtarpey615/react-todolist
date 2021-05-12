import React, { useState, useEffect } from 'react'
// import { tasks } from "../../utils/task"



export default function Task() {
    const [task, setTask] = useState([])
    useEffect(() => {
        getData();
        console.log(task)
    }, [])


    const getData = async () => {
        const apiUrl = "http://localhost:4000/tasks";

        const response = await fetch(apiUrl).then(data => data.json())
        setTask(response)


    }
    return (
        <div className="task">
            {
                task.map(task => (
                    <>
                        <h3>{task.title}</h3>
                        <h4>{task.date}</h4>
                        <h4>{task.task}</h4>
                    </>
                ))
            }
        </div>
    )
}
