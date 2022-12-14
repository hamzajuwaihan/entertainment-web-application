import React from 'react'
import swal from 'sweetalert';
function Comment({ comment, user, created_at, handleDelete, id }) {

    const userID = JSON.parse(sessionStorage.getItem('user')) ? JSON.parse(sessionStorage.getItem('user')).id : null;
    const commentOwner = userID === user.id;
    const clickHandler = () => {
        

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            swal("Poof! Your imaginary raplay has been deleted!", {
                icon: "success",
                
              });
              handleDelete(id);
            } else {
              
            }
          });
    }

    const current = new Date();

    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
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
                                <p className="mb-0"> published on {time} </p>

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