import React from 'react'

export default function addTask() {
    return (
        <div>
            <form >
                <input type="text" name="title" placeholder="enter title" />
                <input type="text" name="date" placeholder="enter date" />
                <input type="text" name="task" placeholder="enter task" />

            </form>
        </div>
    )
}
