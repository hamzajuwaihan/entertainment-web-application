import React from 'react'
import image1 from  "../../assets/images/faces/4.jpg";
function Message() {
  return (
    <><div class="recent-message d-flex px-4 py-3">
    <div class="avatar avatar-lg">
        <img src={image1} alt="1"/>
    </div>
    <div class="name ms-4">
        <h5 class="mb-1 text-muted">Hank Schrader</h5>
        <h6 class="text-muted mb-0">@johnducky</h6>
    </div>
</div></>
  )
}

export default Message