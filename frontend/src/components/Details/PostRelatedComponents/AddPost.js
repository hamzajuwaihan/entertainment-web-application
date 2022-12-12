import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

function AddPost() {

    const { movieId } = useParams();
    const [post, setPost] = React.useState({
        text: '',
        user_id: sessionStorage.getItem('id'),
        movie_id: movieId
    });

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/post', {
            post: post.text,
            user_id: post.user_id,
            movie_id: post.movie_id
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        setPost({ ...post, text: '' });
    }

    return (
        <>
            <h1 className='mt-5 text-center'>Add Post</h1>
            <div className="container mt-3 ">
                <div className='row justify-content-start'>
                    <div className=" py-3 border-0" >
                        <form onSubmit={handleSubmit}>
                            <div className="">

                                <div className="form-outline w-100">
                                    <textarea className="form-control" id="textAreaExample" rows="4"
                                        style={{ background: "#fff" }} value={post.text} name="text" onChange={(e)=> handleChange(e)}></textarea>
                                </div>
                            </div>
                            <div className="float-end mt-2 pt-1">
                                <button type="submit" className="btn btn-primary me-2 btn-sm" >comment</button>
                                <button type="button" className="btn btn-outline-primary btn-sm">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddPost