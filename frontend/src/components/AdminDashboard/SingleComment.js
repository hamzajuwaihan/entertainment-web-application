import React from 'react'

function SingleComment({ id, comment, user, created_at, handleDelete }) {
    let dateObj = new Date(created_at);
    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };
    return (
        <>
            <tr >
                <td>{truncate(comment, 15)}</td>
                <td>{user.name}</td>
                <td>{dateObj.toLocaleDateString("en-US")}</td>
                <td>
                    <button  className='btn btn-sm btn-danger' onClick={() => handleDelete(id)}><i className="fa fa-remove"></i></button>
                </td>
            </tr>
        </>
    )
}

export default SingleComment