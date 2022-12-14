import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from 'react-router';
import { fetchMovies } from '../redux/movies/moviesActions';
import SingleMovie from './Streams/SingleMovie';

function MoviesContainerTest() {
    const [search, setSearch] = useState('');
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);
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
                            <h4 class><em>Results :</em></h4>
                        </div>
                        <div className="row">
                            {currentPosts.length > 0 ? currentPosts.map((movie) => {
                                return (

                                    <SingleMovie title={movie.title} rating={movie.rating} image={movie.image} id={movie.id} key={movie.id}  release_date={movie.release_date} />

                                )
                            }) : null}
                            <div className="col-lg-12">
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ul className="pagination justify-content-center" style={{ marginTop: '10vh' }}>
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item" >
                        <button onClick={() => paginate(number)} className="page-link" style={{marginRight:"10px" ,backgroundColor:'black', color:'white'}}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
            
        </>
        
    )
}


export default MoviesContainerTest