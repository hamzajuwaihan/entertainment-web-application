import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddComment from './AddComment'
import Comment from './Comment'

function Post({ id, comments, post, user,created_at }) {
    const [allComment, setAllComment] = useState([...comments]);
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/comment/${id}`).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })

        const newComments = allComment.filter((comment) => comment.id !== id);

        setAllComment(newComments);
    }
    

 
    const AddReply = (comment) => {


        setAllComment((prev) => {
            return [...prev, comment];
        });

    }

    const editHandler = (comment) => {
        axios.put(`http://localhost:8000/api/comment/${comment.id}`, comment).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        setAllComment((prev) => {
            return prev.map((item) => {
                if (item.id === comment.id) {
                    return comment;
                }
                return item;
            })
        })
       

    }
    

    let dateObj = new Date(created_at);
   

    return (
        <>
            <div className="row d-flex justify-content-start mt-5">
                <div className="col-md-12 col-lg-10 col-xl-8 ">
                    <div className="card bg-dark">
                        <div className="card-body">
                            <div className="d-flex flex-start align-items-center">

                                <div>
                                    <h6 className="fw-bold mb-1">{user.name}</h6>
                                    <p className="text-muted small mb-0">Published on {dateObj.toLocaleDateString("en-US")}

                                 
                                    </p>
                                </div>
                            </div>
                          
                            <p className="mt-3 mb-4 pb-2">
                                {post}
                            </p>

                            {/* comments section */}
                            {
                                allComment.map((comment) => {
                                    return (
                                        <Comment {...comment} handleDelete={handleDelete} editHandler={editHandler} />
                                    )
                                })
                            }


                        </div>

                        {/*add comment form start */}
                        <AddComment post_id={id} handleAdd={AddReply} />

                    </div>
                </div>
            </div>
        </>

    )
}

export default Post