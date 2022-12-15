import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { fetchMovies } from '../../redux/movies/moviesActions';
function SingleMovie({ id, image, title, genre, overview, release_date, runtime, poster, popularity, rating }) {
    const [show, setShow] = useState(false);
    const close = useRef(null);
    let dispatch = useDispatch();
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
        const posterInput = document.querySelector(`#poster-upload${id}`);
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
        formData.append('poster', posterInput.files[0]);
        formData.append('id', id);
        axios.post(`http://localhost:8000/api/movies/file/${id}`, formData,
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
                swal("Movie info has been Edited!", {
                    icon: "success",
                    
                  });
            })
            .catch(err => {
                console.log(err)
            })
        dispatch(fetchMovies());
        close.current.click();

    }
    useEffect(() => {
        document.title = 'Movies Dashboard';

    }, []);
    return (

        <tr>
            <th scope="row"><img src={`http://localhost:8000/images/${image}`} alt="" style={{ 
                width: '100px',
                height: '100px',
             }}/></th>
            <td>{title}</td>
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
                        <Modal.Title>{title}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <Modal.Body>

                            <div className="form-group">
                                <label htmlFor="Title">Title</label>
                                <input type="text" className="form-control" id="Title" placeholder="Enter Title" name="title" onChange={handleChange} value={movie.title} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input className="form-control" type="file" name="image" onChange={handleImage} id={`image-upload${id}`} />
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
                            <div className="mb-3">
                                <label htmlFor="poster" className="form-label">Poster</label>
                                <input className="form-control" type="file" name="poster" onChange={handleImage} id={`poster-upload${id}`} />
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
                            <Button style={{backgroundColor:"#e75e8d"}}  type='submit'>Edit</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </td>

        </tr>
    )
}

export default SingleMovie