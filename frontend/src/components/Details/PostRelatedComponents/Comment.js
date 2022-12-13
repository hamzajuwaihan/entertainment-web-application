import React from 'react'

function Comment({ comment, user, created_at, handleDelete, id }) {
    const commentOwner = JSON.parse(sessionStorage.getItem('user')).id === user.id;
    const clickHandler = () => {
        handleDelete(id);
    }

    const current = new Date();

const time = current.toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
});

  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
        <>
            <div className="card mb-3 bg-dark" >
                <div className="card-body">
                    <div className="d-flex flex-start">

                        <div className="w-100">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h6 className=" fw-bold mb-0">
                                    {user.name}
                                    <div className="text-dark ms-2 text-white">{comment}</div>
                                </h6>
                                <p className="mb-0">{time},{date} </p>
                             
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