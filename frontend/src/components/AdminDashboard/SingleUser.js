
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import swal from 'sweetalert';
function SingleUser({ id, name, type, email, onDelete,onEdit }) {
    const [show, setShow] = useState(false);
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
        

        onEdit(user);
        swal("User info has been Edited!", {
            icon: "success",

        });


    }
    const handleDelete = () => {

        swal({
            title: `Are you sure to delete ${name}?`,
            text: "Once deleted, you will not be able to recover !",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof!User  has been deleted!", {
                        icon: "success",

                    });
                    onDelete(id);
                } else {

                }
            });
    }
    return (
        <>
            <tr>
                <td >{id}</td>
                <td>{name}</td>
                <td>{type}</td>
                <td>{email}</td>
                <td>
                    <Button variant="warning" onClick={handleShow}>
                        <i className="fa fa-edit" />
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
                                <Button variant="secondary" onClick={handleClose} >
                                    Close
                                </Button>
                                <Button  style={{backgroundColor:"#e75e8d"}}  type='submit' onClick={handleClose}>Edit</Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
                </td>
                <td>
                    <Button variant="danger" onClick={() => handleDelete(id)}>
                        <i className="fa fa-remove" />
                    </Button>
                </td>
            </tr>

        </>
    )
}

export default SingleUser