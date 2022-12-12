
import { Link } from 'react-router-dom'

import SingleMovieTest from '../SingleMovieTest';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from 'react-router';
import { viewMovies } from '../../redux/movies/moviesActions';
function LiveStreamStart() {
  const movies = useSelector(state => state.movies);
  const currentMovies = movies.movies.slice(0, 8);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewMovies());
}, []);
  return (
    <div className="live-stream">
      <div className="col-lg-12">
        <div className="heading-section">
          <h4><em>Most Popular</em> Live Stream</h4>
        </div>
      </div>
      <div className="row">

      
      {currentMovies.length > 0 ? currentMovies.map((movie) => {
        return (

            <SingleMovieTest title={movie.title} rating={movie.rating} image={movie.image} id={movie.id} key={movie.id}  release_date={movie.release_date} />

        )
    }) : null}



     










        <div className="col-lg-12">
          <div className="main-button">
            <Link to="/movies">explore more</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default LiveStreamStart