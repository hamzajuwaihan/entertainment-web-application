import React from 'react'
import image3 from '../../assets/images/faces/5.jpg';
function Comment() {
  return (
    <> <tr>
    <td class="col-3">
        <div class="d-flex align-items-center">
            <div class="avatar avatar-md">
                <img src={image3} />
            </div>
            <p class="font-bold ms-3 mb-0">Cantik</p>
        </div>
    </td>
    <td class="col-auto">
        <p class=" mb-0">Congratulations on your graduation!</p>
    </td>
</tr></>
  )
}

export default Comment