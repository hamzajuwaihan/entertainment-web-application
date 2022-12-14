
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/users/usersActions';
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
    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/users/${id}`).then((res) => {
            const newUsers = users.filter(user => user.id !== id)
            setUsers(newUsers);
        }).catch((err) => {
            console.log(err);
        })
    }
    const handleEdit = (user) => {
        axios.put(`http://localhost:8000/api/users/${user.id}`, user).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        setUsers((prev) => {
            return prev.map((item) => {
                if (item.id === user.id) {
                    return user;
                }
                return item;
            })
        })
    }

    return (
        <>
            <div className="content-wrapper container">
                <div className="page-content">
                    <table class="table table-striped table-dark mt-5">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Type</th>
                                <th scope="col">email</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <SingleUser key={user.id} {...user} onDelete={handleDelete} onEdit={handleEdit}/>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UsersDashboard