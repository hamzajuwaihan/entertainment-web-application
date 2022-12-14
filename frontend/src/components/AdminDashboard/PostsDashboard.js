import axios from 'axios';
import React, { useEffect } from 'react'
import SinglePost from './SinglePost';

function PostsDashboard() {
    const [posts, setPosts] = React.useState([]);

    const handleDelete = (id) => {
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
                }else{
                    return 1;
                }
            }
            )
        });
        axios.put(`http://localhost:8000/api/post/${id}`, {
            status: status
        })
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