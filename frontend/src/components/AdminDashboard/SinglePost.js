import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SinglePost({ post, user, date, id, handleDelete, created_at, status, handleEdit }) {
    let dateObj = new Date(created_at);
    function truncate(str, n) {
        return (str.length > n) ? str.slice(0, n - 1) + '...' : str;
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const closeButton = useRef(null);
    const [newStatus, setNewStatus] = useState(status);
    const handleStatusChange = (e) => {
        setNewStatus(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleEdit(id, newStatus);
        closeButton.current.click();

    }
    const warning = 'text-warning';
    const success = 'text-success';
    const danger = 'text-danger';
    return (
        <>
            <tr>
                <td>{truncate(post, 15)}</td>
                <td>{user.name}</td>
                <td>{dateObj.toLocaleDateString("en-US")}</td>
                <td className={status==='pending'? warning : status === 'approved'?success:danger}>{status}</td>
                <td><button className='btn btn-sm btn-danger' onClick={() => handleDelete(id)}><i className="fa fa-remove"></i></button></td>
                <td>
                    <Button className='btn btn-sm btn-info' onClick={handleShow}>
                        <i className="fa fa-edit"></i>
                    </Button>
                </td>
                <Modal show={show} onHide={handleClose} centered>
                    <form onSubmit={handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Post {id}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='form-group mb-3'>
                                <label htmlFor="post">Post</label>
                                <textarea className='form-control' id='post' defaultValue={post} disabled
                                    style={{ minHeight: 100 }} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="user">Author</label>
                                <input type="text" className='form-control' id='user' defaultValue={user.name} disabled />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="date">Date</label>
                                <input type="text" className='form-control' id='date' defaultValue={dateObj.toLocaleDateString("en-US")} disabled />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="status">Status</label>
                                <select className='form-control' id='status' onChange={handleStatusChange} defaultValue={status}>
                                    <option value='pending'>Pending</option>
                                    <option value='approved'>Approved</option>
                                    <option value='rejected'>Rejected</option>
                                </select>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" ref={closeButton} onClick={handleClose}>
                                Close
                            </Button>
                            <Button style={{backgroundColor:"#e75e8d"}}  type="submit" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </tr>
        </>
    )
}

export default SinglePost