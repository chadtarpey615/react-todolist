import React from 'react'

export default function button(props) {
    const handleInput = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
    return (
        <div className="btn">
            <button onClick={handleInput}>Add Task</button>
        </div>
    )
}
