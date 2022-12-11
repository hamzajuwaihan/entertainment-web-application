import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleUser from './SingleUser';

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
                                <th scope="col">Id</th>
                                <th scope="col">name</th>
                                <th scope="col">edit</th>
                                <th scope="col">delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <SingleUser {...user} />
                                
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UsersDashboard