import React from 'react'

function DisplayInfo({email, lastUpdate}) {
    return (
        <div className="col-lg-4 align-self-center">
            <ul>
                <li>Email: <span>{email}</span></li>
                <li>Last update <span>{lastUpdate}</span></li>


            </ul>
        </div>
    )
}

export default DisplayInfo