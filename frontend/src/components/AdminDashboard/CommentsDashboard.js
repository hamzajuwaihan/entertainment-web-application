import axios from 'axios'
import React, { useEffect } from 'react'
import swal from 'sweetalert'
import SingleComment from './SingleComment'

function CommentsDashboard() {

    const [comments, setComments] = React.useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/comment').then(res => {
            setComments(res.data)

        }).catch(err => {
            console.log(err)
        })
    }, [])

    const handleDelete = (id) => {
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
              const newComments = comments.filter(comment => comment.id !== id)
              setComments(newComments)
              axios.delete(`http://localhost:8000/api/comment/${id}`)
            } else {
              
            }
          });
       

    }
    return (
        <>
            <div className="content-wrapper container">
                <div className="page-content">
                    <table className="table table-striped table-dark mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Body</th>
                                <th scope="col">Author</th>
                                <th scope="col">Date</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comments.map(comment => (
                                <SingleComment key={comment.id} comment={comment.comment}
                                    created_at={comment.created_at}
                                    user={comment.user}
                                    handleDelete={handleDelete}
                                    id={comment.id}
                                />
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default CommentsDashboard