import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SingleMovie from './SingleMovie'

function MoviesDashboard() {
    const { movies } = useSelector(state => state.movies)
    const [allMovies, setAllMovies] = useState(movies);
    useEffect(() => {
        setAllMovies(movies)
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allMovies.slice(indexOfFirstPost, indexOfLastPost);
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allMovies.length / postsPerPage); i++) {
        pageNumbers.push(i);

    }
    return (
        <>
            <div className="content-wrapper container">
                <div className="page-content">
                    <table className="table table-striped table-dark mt-2">
                        <thead >
                            <tr  >
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Edit</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {currentPosts.length > 0 ? currentPosts.map((movie) => {
                                return (

                                    <SingleMovie key={movie.id} {...movie} />
                                )
                            }) : null}

                            {/* {allMovies.map(movie => (
                                <SingleMovie key={movie.id} {...movie} />
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
            <ul className="pagination justify-content-center" style={{ marginTop: '10vh' }}>
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item" >
                        <button onClick={() => paginate(number)} className="page-link" style={{marginRight:"12px" ,backgroundColor:'black', color:'white'}}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
            <br/>

        </>

    )
}

export default MoviesDashboard