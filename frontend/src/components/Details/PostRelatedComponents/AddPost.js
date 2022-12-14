import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
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
            swal("post", "Your post will appear after approval by the administrator");

        }).catch((err) => {
            console.log(err);
        })
        setPost({ ...post, text: '' });
    }

    return (
        <>

         <div className="heading-section mt-5 px-3">
          <h4><em>Add a</em> post</h4></div>
         

            <div className="container mt-3 ">
                <div className='row justify-content-start'>
                    <div className=" py-3 border-0" >
                        <form onSubmit={handleSubmit}>
                            <div className="">

                                <div className="form-outline w-100">
                                    <textarea className="form-control" id="textAreaExample" rows="3" placeholder='Type a post'
                                        style={{ background: "#27292a", color: "white" }} value={post.text} name="text" onChange={(e) => handleChange(e)}></textarea>
                                </div>
                            </div><br />
                            <div className="float-end mt-2 pt-1">
                                <button type="submit" style={{backgroundColor:"#ec6090", color:"white"}} className="btn me-2 btn-sm" >Post</button>
                                <button type="button" style={{border:"1px solid #ec6090", color:"white"}} className="btn  btn-sm">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddPost