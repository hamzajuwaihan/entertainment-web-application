import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteMovie, updateMovie } from '../redux/movies/moviesActions';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function SingleMovie({ id, title, content, image }) {
    const [show, setShow] = useState(false);
    const pattern = /^[a-zA-Z ]*$/;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editTitle, setTitle] = useState(title);
    // const [editContent, setContent] = useState(content);
    // const [editImage, setImage] = useState(image);
    const dispatch = useDispatch();
    const formHandler = (e) => {
        e.preventDefault();
        dispatch(deleteMovie(id));
    }
    const [hasError, setErrors] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const closeButton = useRef(null);
    const editHandler = (e) => {
        e.preventDefault();
        if (editTitle === ''
        //  || editContent === '' || editImage === ''
         ) {
            setErrors(true);
            setErrorMessage('Please fill all fields');
        } else if (!pattern.test(editTitle)) {
            setErrors(true);
            setErrorMessage('Title should not contain special characters or numbers');
        } else {
            setErrors(false);
            setErrorMessage('');
            const movie = { id, title: editTitle
                // , content: editContent, image: editImage
             };
            dispatch(updateMovie(movie));
            setTitle('');
            // setContent('');
            // setImage('');

            closeButton.current.click();

        }

    }

    return (
        <div className="card col-3 m-2" style={{ width: '18rem' }}>
            {/* <img src={image} className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {/* <p className="card-text">{content}</p> */}
                <form onSubmit={formHandler}>
                    <button className="btn btn-danger me-2" type='submit'>Delete</button>

                    <Button variant="primary" onClick={handleShow}>
                        Edit
                    </Button>
                </form>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading {id}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={editHandler}>
                        <Modal.Body>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" name='title' value={editTitle} onChange={(e) => setTitle(e.target.value)} />
                            </div>
                            {/* <div className="mb-3">
                                <label htmlFor="content" className="form-label">Content</label>
                                <input type="text" className="form-control" id="content" name='content' value={editContent} onChange={(e) => setContent(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input type="text" className="form-control" id="image" name='image' value={editImage} onChange={(e) => setImage(e.target.value)} />
                            </div> */}
                            {hasError && <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} ref={closeButton}>
                                Close
                            </Button>
                            <Button variant="primary" type='submit'>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>


        </div>


    )
}

export default SingleMovie