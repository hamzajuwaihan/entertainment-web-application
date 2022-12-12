import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

function AddToFavourite() {

    const { movieId } = useParams();
    const [favourite, setFavourite] = React.useState({
        
        user_id: sessionStorage.getItem('id'),
        movie_id: movieId
    });

    // const handleChange = (e) => {
    //     setFavourite({ ...favourite, [e.target.name]: e.target.value })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/favourite', {
           
            user_id: favourite.user_id,
            movie_id: favourite.movie_id
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
        setFavourite({ ...favourite});
    }

    return (
        <>
           
            <div className="container mt-3 ">
                <div className='row justify-content-start'>
                    <div className=" py-3 border-0" >
                        <form onSubmit={handleSubmit}>
                            <div className="">

                                {/* <div className="form-outline w-100">
                                    <textarea className="form-control" id="textAreaExample" rows="4"
                                        style={{ background: "#fff" }} value={post.text} name="text" onChange={(e)=> handleChange(e)}></textarea>
                                </div> */}
                            </div>
                            <div className="float-end mt-2 pt-1">
                                <button type="submit" className="btn btn-primary me-2 btn-sm" > <i className="fa fa-heart" /> Add to Favourite</button>
                             
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddToFavourite