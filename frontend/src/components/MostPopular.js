import { Link } from "react-router-dom";

import TopRatedMovie from "./TopRatedMovie";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { viewMovies } from "../redux/movies/moviesActions";
function MostPopular() {
  const movies = useSelector((state) => state.movies);
  const currentMovies = movies.movies.slice(0, 6);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewMovies());
  }, []);
  return (
    <div className="live-stream">
      <div className="col-lg-12">
        <div className="heading-section">
          <h4>
            <em>Most Popular</em> Right Now
          </h4>
        </div>
      </div>
      <div className="most-popular">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {currentMovies.length > 0
                ? currentMovies.map((movie) => {
                    return (
                      <TopRatedMovie
                        title={movie.title}
                        genre={movie.genre}
                        rating={movie.rating}
                        image={movie.image}
                        id={movie.id}
                        key={movie.id}
                        release_date={movie.release_date}
                      />
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostPopular;
