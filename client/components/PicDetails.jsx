import React from 'react'

export default function PicDetails (props) {
    const {pic, isVisible} = props
    const classes = 'pic-details ' + (isVisible ? 'visible' : 'hidden')

    return (
        <div className={classes}>
            <h2>{pic.title}</h2>
            <p>{pic.explanation}</p>
            {/* <a href='/' onClick={hideDetails}>Close</a> */}
        </div>
    )
}