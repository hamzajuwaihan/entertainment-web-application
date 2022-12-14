import React from 'react'

function DisplayInfo({email, lastUpdate}) {

    let dateObj = new Date(lastUpdate);

    return (
        <div className="col-lg-4 align-self-center ms-auto" >
            <ul>
                <li>Email: <span>{email}</span></li>

                <li>Last update <span>{dateObj.toLocaleDateString("en-US")}</span></li>



            </ul>
        </div>
    )
}

export default DisplayInfo