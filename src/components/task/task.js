import React, { useEffect } from 'react'
// import { tasks } from "../../utils/task"



const Task = ({ task }) => {
    useEffect(() => {
        console.log(task)

    }, [])

    return (
        <div className="task">
            {
                task.map((task, index) => (
                    <>
                        <h3 key={index}>{task.title}</h3>
                        <h4>{task.date}</h4>
                        <h4>{task.task}</h4>
                    </>
                ))
            }
        </div>
    )
}

export default Task;
