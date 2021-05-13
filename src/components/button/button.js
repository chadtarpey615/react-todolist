import React from 'react'

export default function button({ color, text, handleSubmit }) {
    const handleInput = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
    return (
        <div className="btn">
            <button style={{ backgroundColor: color }} onClick={handleSubmit}>{text}</button>
        </div>
    )
}
