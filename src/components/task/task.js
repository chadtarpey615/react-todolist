import React, { useEffect } from 'react'
import { tasks } from "../../utils/task"



export default function Task() {

    useEffect(() => {
        console.log(tasks)
    })
    return (
        <div >
            {
                tasks.map(task => (
                    <h1>{task.title}</h1>
                ))
            }
        </div>
    )
}
