import React, { useEffect } from 'react';
import { FaTimes } from "react-icons/fa"
// import { tasks } from "../../utils/task"



const Task = ({ task, onDelete }) => {
    useEffect(() => {
        console.log(task)

    }, [])

    return (
        <div className="task">
            {
                task.map((task, index) => (
                    <>
                        <h3 key={index}>{task.title}<FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(task.id)} /></h3>
                        <h4>{task.date}</h4>
                        <h4>{task.task}</h4>
                    </>
                ))
            }
        </div>
    )
}

export default Task;
