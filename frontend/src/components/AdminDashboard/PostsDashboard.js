import axios from 'axios';
import React, { useEffect } from 'react'
import SinglePost from './SinglePost';
import swal from 'sweetalert';
function PostsDashboard() {
    const [posts, setPosts] = React.useState([]);

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
              const newPosts = posts.filter((post) => post.id !== id);
              setPosts(newPosts);
              axios.delete(`http://localhost:8000/api/post/${id}`);
            } else {
              
            }
          });
       
    }
    const handleEdit = (id, status) => {
        setPosts(posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    status: status
                }
            }
            return post;
        }))
        setPosts((prev) => {
            return prev.sort((a, b) => {
                if (a.status === "pending") {
                    return -1;
                } else {
                    return 1;
                }
            }
            )
        });
        axios.put(`http://localhost:8000/api/post/${id}`, {
            status: status
        })
        swal("Post info has been Edited!", {
            icon: "success",
            
          });
    }
    useEffect(() => {
        document.title = 'Posts Dashboard';
        axios.get('http://localhost:8000/api/post').then((res) => {
            setPosts(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }, [])

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
                                <th scope="col">Status</th>
                                <th scope="col" colSpan={2}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => {
                                return (
                                    <SinglePost key={post.id} {...post} handleDelete={handleDelete}
                                        handleEdit={handleEdit} />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default PostsDashboard