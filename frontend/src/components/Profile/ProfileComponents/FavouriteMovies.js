import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Movie from './Movie';
function FavouriteMovies({ favouriteMovies }) {

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="clips">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section">
                                <h4><em>Your Favourite</em> Movies</h4>
                            </div>
                        </div>

                        {favouriteMovies.map((movie) => {
                            return (
                                <Movie movie={movie.movie} key={movie.id} />
                            )
                        })}

                        <div className="col-lg-12">
                            <div className="main-button">
                                <Link to="/Streams">View All Movies</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavouriteMovies