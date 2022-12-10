import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function SingleMovie({ id, image, title, genre, overview, release_date, runtime, poster, popularity, rating }) {
    const [show, setShow] = useState(false);
    const close = useRef(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [movie, setMovie] = useState({
        image: image,
        title: title,
        genre: genre,
        overview: overview,
        release_date: release_date,
        runtime: runtime,
        poster: poster,
        popularity: popularity,
        rating: rating
    });
    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.name]: e.target.value });
    }
    const handleImage = (e) => {
        setMovie({ ...movie, image: e.target.files[0] });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const fileInput = document.querySelector(`#image-upload${id}`);
        const formData = new FormData();
        formData.append('image', fileInput.files[0]);
        formData.append('title', movie.title);
        formData.append('genre', movie.genre);
        formData.append('overview', movie.overview);
        formData.append('release_date', movie.release_date);
        formData.append('runtime', movie.runtime);
        formData.append('poster', movie.poster);
        formData.append('popularity', movie.popularity);
        formData.append('rating', movie.rating);

        axios.put(`http://localhost:8000/api/movies/${id}`, formData,
            {
                onUploadProgress: progressEvent => {
                    console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')
                },
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        close.current.click();
    }
    useEffect(() => {
        document.title = 'Movies Dashboard';
    }, []);
    return (

        <tr>
            <th scope="row"><img src={image} alt="" /></th>
            <td>{title}</td>
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
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handleSubmit}  encType="multipart/form-data">
                        <Modal.Body>

                            <div className="form-group">
                                <label htmlFor="Title">Title</label>
                                <input type="text" className="form-control" id="Title" placeholder="Enter Title" name="title" onChange={handleChange} value={movie.title} />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="image" class="form-label">Image</label>
                                <input class="form-control" type="file" name="image" onChange={handleImage} id={`image-upload${id}`} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="genre">genre</label>
                                <input type="text" className="form-control" id="genre" placeholder="genre" name="genre" onChange={handleChange} value={movie.genre} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="overview">Overview</label>
                                <textarea className="form-control" id="overview" rows="3" name="overview" onChange={handleChange} value={movie.overview}></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="popularity">Popularity</label>
                                <input type="number" className="form-control" id="popularity" placeholder="popularity" name="popularity" onChange={handleChange} value={movie.popularity} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="poster">Poster</label>
                                <input type="text" className="form-control" id="poster" placeholder="poster" name="poster" onChange={handleChange} value={movie.poster} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating</label>
                                <input type="number" className="form-control" id="rating" placeholder="rating" name="rating" onChange={handleChange} value={movie.rating} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="release_date">Release Date</label>
                                <input type="date" className="form-control" id="release_date" placeholder="release_date" name="release_date" onChange={handleChange} value={movie.release_date} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="runtime">Runtime</label>
                                <input type="number" className="form-control" id="runtime" placeholder="runtime" name="runtime" onChange={handleChange} value={movie.runtime} />
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
            <td><button className="btn btn-danger">Delete</button></td>
        </tr>
    )
}

export default SingleMovie