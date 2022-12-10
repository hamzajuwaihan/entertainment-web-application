import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from 'react-router';
import { fetchMovies } from '../redux/movies/moviesActions';
import SingleMovieTest from './SingleMovieTest';

function MoviesContainerTest() {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = movies.movies.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(movies.movies.length / postsPerPage); i++) {
        pageNumbers.push(i);

    }
    useEffect(() => {
        dispatch(fetchMovies());
    }, []);
    return movies.loading ? (
        <div className='text-center container'><h2>Loading</h2></div>
    ) : movies.error ? (
        <h2>{movies.error}</h2>
    ) : (
        <>
            <div className="live-stream">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section">
                            <h4><em>Most Popular</em> Right Now</h4>
                        </div>
                        <div className="row">
                            {currentPosts.length > 0 ? currentPosts.map((movie) => {
                                return (

                                    <SingleMovieTest title={movie.title} rating={movie.rating} id={movie.id} key={movie.id} />

                                )
                            }) : null}
                            <div className="col-lg-12">
                                <div className="main-button">
                                    <a href="browse.html">Discover Popular</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ul className="pagination justify-content-center" style={{ marginBottom: '30px' }}>
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
            
        </>
        // <div>
        //     <div className='container mt-5'>
        //         <div className="row">
        //             <div className="heading-section  col-9">
        //                 <h4><em>Most Popular</em> Live Stream</h4>
        //             </div>
        //         </div>
        //         <div className='row'>

        //             {
        //                 currentPosts.length > 0 ? currentPosts.map((movie) => {
        //                     return (

        //                         <SingleMovieTest title={movie.title} rating={movie.rating} id={movie.id} key={movie.id} />
        //                         // <MovieDetails title={movie.title} rating={movie.rating} id={movie.id}  key={movie.id} />
        //                     )
        //                 }) : null
        //             }

        //         </div>

        //     </div>
        // </div>
    )
}


export default MoviesContainerTest