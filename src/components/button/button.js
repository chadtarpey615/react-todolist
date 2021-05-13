import React from 'react'

export default function button({ color, text, handleSubmit }) {

    return (
        <div className="btn">
            <button style={{ backgroundColor: color }} onClick={handleSubmit}>{text}</button>
        </div>
    )
}
