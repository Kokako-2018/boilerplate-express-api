import React from 'react'

export default function PicDetails (props) {
    const {pic} = props

    return (
        <div>
            <h2>{pic.title}</h2>
            <p>{pic.explanation}</p>
        </div>
    )
}