import React from 'react'
import image2 from '../../assets/images/faces/1.jpg';
function Profile() {
    return (
    <> <div class="card">
    <div class="card-body py-4 px-5">
        
        <div class="d-flex align-items-center">
            <div class="avatar avatar-xl">
                <img src={image2} alt="Face 1"/>
            </div>
            <div class="ms-3 name">
                <h5 class="font-bold text-muted">John Duck</h5>
                <h6 class="text-muted mb-0">@johnducky</h6>
            </div>
        </div>
    </div>
</div></>
    )
}

export default Profile