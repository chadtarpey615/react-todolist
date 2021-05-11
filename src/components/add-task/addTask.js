import React from 'react'

export default function addTask() {
    return (
        <form>
            <div className="form-control">
                <label for="title">Title</label>
                <input type="text" name="title" placeholder="enter title" />
            </div>
            <div className="form-control">
                <label for="date">Date</label>
                <input type="text" name="date" placeholder="enter date" />
            </div>
            <div className="form-control">
                <label for="task">Task</label>
                <input type="text" name="task" placeholder="enter task" />
            </div>


        </form>
    )
}
