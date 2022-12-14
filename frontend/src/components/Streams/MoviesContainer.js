import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Outlet } from 'react-router';
import SingleMovie from './SingleMovie';
import { fetchMovies, searchMovie } from '../../redux/movies/moviesActions';
import {NavLink, useLocation, useNavigate } from 'react-router-dom'
function MoviesContainerTest() {
    const movies = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);


    const [search, setSearch] = useState('');
   
    const location = useLocation();

    const navigate = useNavigate();
  
    const searchHandler = (e) => {
        e.preventDefault();
        if (search.trim() === '') {
            dispatch(fetchMovies());
            return;
        }
        dispatch(searchMovie(search));
        if (location.pathname !== '/streams') {
            navigate('/streams');
        }
    }

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
                            <h4 class><em>All Movies</em> Right Now</h4>
                        </div>
                        {/* <div style={{backgroundColor:"#27292a",height:"46px",borderRadius:"23px",border:"none",color:"#666",fontSize:"14px",padding:"0px 15px 0px 45px"}}>

                        <div className="search-input">
                  <form id="search" action="#" onSubmit={searchHandler}>
                    <input
                   
                       type="search"
                      placeholder="Type Something"
                      id="searchText"
                      name="search"
                      onkeypress="handle"
                  
                      value={search} onChange={(e) => { setSearch(e.target.value) }}
                    />
                    <i className="fa fa-search"></i>
                  </form>
                </div></div> */}
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
                        <button onClick={() => paginate(number)} className="page-link" style={{marginRight:"10px" , backgroundColor:'black', color:'white'}}>
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