import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

function AddComment({ post_id, handleAdd }) {
    const [closed, setClosed] = React.useState(false);
    const { movieId } = useParams();
    const userID = JSON.parse(sessionStorage.getItem('user')) === null ? 0 : JSON.parse(sessionStorage.getItem('user')).id;
    const [comment, setComment] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/comment', {
            post_id: post_id,
            user_id: userID,
            comment: comment
        }).then((res) => {
            handleAdd(res.data);
            setClosed(!closed);
        }).catch((err) => {
            console.log(err);
        })
        
        setComment('');
    }

    return (
        <>
            {userID !== 0 && !closed ? <div className="card-footer py-3 border-0" >
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-start w-100">

                        <div className="form-outline w-100">
                            <textarea className="form-control" id="textAreaExample" rows="2" placeholder='type a reply'
                                style={{ background: "#fff" }} value={comment} onChange={(e) => { setComment(e.target.value) }}></textarea>

                        </div>
                    </div>
                    <div className="float-end mt-2 pt-1">
                        <button type="submit" style={{ backgroundColor: "#ec6090" }} className="btn  me-2 btn-sm">Reply</button>
                        <button type="button" style={{ border: "1px solid #ec6090", color: "#ec6090" }} className="btn  btn-sm" onClick={() => setClosed(!closed)}>Cancel</button>
                    </div>
                </form>
            </div> : null}
        </>
    )
}

export default AddComment