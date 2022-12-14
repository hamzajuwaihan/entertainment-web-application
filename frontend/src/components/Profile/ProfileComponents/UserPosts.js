import axios from 'axios';
import React, { useEffect, useState } from 'react'

function UserPosts({ user }) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${user.id}/posts`).then((res) => {
            setPosts(res.data);
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [user]);
    return (
        <>
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div className="heading-section">
                        <h4><em>My </em> Posts</h4>
                        <table className="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Post</th>
                                    <th scope="col">Date</th>
                                    <th>Movie</th>
                                    <th>Go to movie</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    posts.map((post) => {
                                        let date = new Date(post.created_at);
                                        return (
                                            <tr>
                                                <td>{post.post}</td>
                                                <td>{date.toLocaleDateString("en-US")}</td>
                                                <td>{post.movie.title}</td>
                                                <td><a href={`/movie/${post.movie.id}`} >
                                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                                    
                                                </a></td>
                                            </tr>
                                        )

                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPosts