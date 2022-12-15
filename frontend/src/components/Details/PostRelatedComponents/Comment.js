
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useParams } from 'react-router';
import swal from 'sweetalert';
function Comment({ comment, user, created_at, handleDelete, id, editHandler }) {
    const [show, setShow] = useState(false);
    const { movieId } = useParams();
    const [commentText, setCommentText] = useState(comment);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    const handleSubmit = (e) => {
        e.preventDefault();
        editHandler({
            id, comment: commentText, movie_id: movieId,
            user: user
        });
    }
    const current = new Date();

    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });


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
                    {commentOwner && (

                        <>
                            <Button variant="primary" className='btn btn-sm btn-info mx-2' onClick={handleShow}>
                                <i className="fa fa-edit"></i>
                            </Button>
                            <Modal show={show} onHide={handleClose}
                                centered>
                                <Modal.Header closeButton>
                                    <Modal.Title>Edit your comment</Modal.Title>
                                </Modal.Header>
                                <form onSubmit={handleSubmit}>
                                    <Modal.Body>
                                        <div className="form-group">
                                            <label htmlFor="comment">Comment</label>
                                            <textarea className="form-control" id="comment" rows="3" value={commentText}
                                                onChange={(e) => setCommentText(e.target.value)}
                                            ></textarea>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button style={{backgroundColor:"#e75e8d"}}  type="submit" onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>

                                </form>
                            </Modal>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Comment