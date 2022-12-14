import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function AddToFavourite() {

    const { movieId } = useParams();
    const [favourite, setFavourite] = useState(false);
    const user = JSON.parse(sessionStorage.getItem('user'));


    const handleSubmit = (e) => {
        e.preventDefault();


    }

    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:8000/api/isFavourite/${user.id}/${movieId}`).then((res) => {
                setFavourite(res.data.message);

                console.log(res.data.message);

            }).catch((err) => {
                console.log(err);
            })

        }

    }, []);





    const changColor = (e) => {
        if (e.target.style.color === "red") {
            e.target.style.color = "white";
            axios.delete(`http://localhost:8000/api/deleteFavourite/`, {
                data: {
                    userId: user.id,
                    movieId: movieId
                }
            }).then((res) => {
                setFavourite(true);
                console.log(res.data.message);
            }).catch((err) => {

                console.log(err);
            })
        } else {
            e.target.style.color = "red";
            axios.post(`http://localhost:8000/api/favourite/`, {
                userId: user.id,
                movieId: movieId
            }).then((res) => {
                setFavourite(true);
                console.log(res.data.message);
            }).catch((err) => {

                console.log(err);
            })
        };
    }
    return (
        <>

            <div className="container mt-3 ">
                <div className='row justify-content-start'>
                    <div className=" py-3 border-0" >
                        {
                            user ?
                                <form onSubmit={handleSubmit}>
                                    <div className="">
                                    </div>
                                    <button type="submit" className="btn me-2 btn-lg" style={{ fontSize: "30px" }} >
                                        <i id="box" className={`fa fa-heart  hundrad ${favourite === "true" ? 'red' : 'white'}`} onClick={changColor} />
                                    </button>
                                </form> : null
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddToFavourite