import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function MainInfo({ user, handleEdit, closeButton }) {
    const [show, setShow] = useState(false);
    const [userInfo, setUserInfo] = useState(user);
    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value,
        });
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo);
        handleEdit(userInfo);
        // handleClose();
    };
    return (
        <div className="main-info header-text">

            <h4>{user.name}</h4>

            <div className="main-border-button">
                <a variant="primary" className='' onClick={handleShow}
                    style={{
                        cursor: 'pointer',
                    }} >
                    Edit
                </a>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My Info</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>

                        <div className="form-group mb-3">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter name"
                                onChange={handleChange} value={userInfo.name} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email"
                                name='email'
                                placeholder="Enter email"
                                onChange={handleChange} value={userInfo.email} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Password"
                                onChange={handleChange} value={userInfo.password} />
                        </div>
                        <div>

                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" ref={closeButton} onClick={handleClose}>
                            Close
                        </Button>
                        <Button style={{backgroundColor:"#e75e8d"}} variant="#e75e8d" type="submit" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}

export default MainInfo