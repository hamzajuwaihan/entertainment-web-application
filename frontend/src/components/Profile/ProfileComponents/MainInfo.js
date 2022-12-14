import React from 'react'

function MainInfo({name}) {
    return (
        <div className="main-info header-text">

            <h4>{name}</h4>

            <div className="main-border-button">
                <a href="#">Edit</a>
            </div>
        </div>
    )
}

export default MainInfo