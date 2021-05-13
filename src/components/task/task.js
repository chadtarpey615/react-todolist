import React, { useState, useEffect } from 'react'
// import { tasks } from "../../utils/task"



export default function Task({ task }) {
    useEffect(() => {
        console.log(task)

    }, [])

    return (
        <div className="task">
            {
                task.map(task => {
                    <>
                        <h3 key={task.id}>{task.title}</h3>
                        <h4>{task.date}</h4>
                        <h4>{task.task}</h4>
                    </>
                })
            }
        </div>
    )
}
