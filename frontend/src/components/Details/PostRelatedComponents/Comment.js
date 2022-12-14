import React from 'react'

function Comment({ comment, user, created_at, handleDelete, id }) {

    const userID = JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).id : null;
    const commentOwner = userID === user.id;
    const clickHandler = () => {
        handleDelete(id);
    }

    let dateObj = new Date(created_at);
    
    return (
        <>
            <div className="card mb-3 bg-dark" >
                <div className="card-body">
                    <div className="d-flex flex-start">

                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h6 className=" fw-bold mb-0">
                                    {user.name} 

                                    <div className="text-dark ms-2 mt-3 text-white">{comment}</div>
                               </h6>
                                <p className="mb-0"> published on {dateObj.toLocaleDateString("en-US")} </p>

                            </div>

                        </div>


                    </div>
                    {commentOwner && (<button className='btn btn-sm btn-danger' onClick={clickHandler}><i className="fa fa-remove"></i></button>)}
                </div>
            </div>
        </>
    )
}

export default Comment