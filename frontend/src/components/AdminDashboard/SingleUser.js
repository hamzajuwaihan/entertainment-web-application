
import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../../redux/users/usersActions';

function SingleUser({ id, name, type, email }) {
    const [show, setShow] = useState(false);
    const close = useRef(null);
    let dispatch = useDispatch();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user, setUser] = useState({
        id: id,
        name: name,
        type: type,
        email: email
    });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUser({
            id: user.id,
            name: user.name,
            type: user.type,
            email: user.email
        }));
        console.log(user)
        close.current.click();
    }
    const handleDelete = () => {
        dispatch(deleteUser(id));
    }
    return (
        <>
            <tr>
                <td >{id}</td>
                <td>{name}</td>
                <td>{type}</td>
                <td>{email}</td>
                <td>
                    <Button variant="primary" onClick={handleShow}>
                        Edit
                    </Button>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{name} Info</Modal.Title>
                        </Modal.Header>
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <Modal.Body>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" name='name' value={user.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="type">Type</label>
                                    <select className="form-control" id="type" name='type' value={user.type} onChange={handleChange}>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className="form-control" id="email" name='email' value={user.email} onChange={handleChange} />
                                </div>


                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose} ref={close}>
                                    Close
                                </Button>
                                <Button variant="primary" type='submit'>Edit</Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </td>
                <td>
                    <Button variant="danger" onClick={(id)=> handleDelete(id)}>
                        Delete
                    </Button>
                </td>
            </tr>

        </>
    )
}

export default SingleUser