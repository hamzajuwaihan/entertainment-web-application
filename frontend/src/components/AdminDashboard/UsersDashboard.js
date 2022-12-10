import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UsersDashboard() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/users').then((res) => {
            setUsers(res.data);
        }).catch((err) => {
            console.log(err);
        })

    }, []);
    return (
        <>
            <div className="content-wrapper container">
                <div className="page-content">
                    <table class="table table-striped table-dark mt-5">
                        <thead>
                            <tr>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">edit</th>
                                <th scope="col">delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr>
                                    <th scope="row"><img src={user.image} alt="" /></th>
                                    <td>{user.title}</td>
                                    <td><button className="btn btn-primary">Edit</button></td>
                                    <td><button className="btn btn-danger">Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UsersDashboard