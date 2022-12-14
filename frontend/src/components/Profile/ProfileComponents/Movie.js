import React from 'react'
import { Link } from 'react-router-dom';
function Movie({ movie }) {

    return (

        <div className="col-lg-3 col-sm-6">
            <Link to={`/movie/${movie.id}`}>
                <div className="item">
                    <div className="thumb">
                        <img   src={`http://localhost:8000/images/${movie.image}`} alt style={{ borderRadius: 23 }} />
                        {/* <a href="https://www.youtube.com/watch?v=r1b03uKWk_M" target="_blank"><i className="fa fa-play" /></a> */}
                    </div>
                    <div className="down-content">
                        <h4>{movie.title}</h4><br/>
                        <span>{movie.genre}</span>
                    </div>
                </div>
            </Link>
        </div >

    )
}

export default Movie