import React from 'react'
import Button from "../button/button"
export default function header({ handleSubmit }) {

    return (
        <header className="header">
            <h1>React TodoList</h1>
            <Button handleSubmit={handleSubmit} />
        </header>
    )
}
