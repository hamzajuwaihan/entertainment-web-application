import React, { useEffect, useRef, useState } from 'react'

function UserImage({ name }) {
    const [initials, setInitials] = useState('');
    const nameContainer = useRef(null);
    useEffect(() => {
        setInitials(name[0])
        if (initials !== '') {
            nameContainer.current.innerHTML = initials == null ? '' : initials;
        }
    }, [initials, name])
    return (
        <div className="col-lg-2">
            {/* <img src="./user/assets/images/profile.jpg" alt style={{ borderRadius: 23 }} /> */}
            {<div id="name-container">
                <div id="css-name"  ref={nameContainer}>
                    {/* {initials !== undefined && initials} */}
                </div>
            </div>}
        </div>
    )
}

export default UserImage