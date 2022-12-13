import axios from 'axios';
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, DELETE_MOVIE_REQUEST, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAILURE, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE, SEARCH_MOVIE_REQUEST, UPDATE_MOVIE_REQUEST
    ,VIEW_MOVIES_REQUEST,VIEW_MOVIES_SUCCESS,VIEW_MOVIES_FAILURE, LATEST_MOVIE_SUCCESS, LATEST_MOVIE_FAILURE } from "./moviesType";


// ? FETCH MOVIES ACTIONS SECTION
export const fetchMovies = () => {
    return (dispatch) => {
        dispatch(fetchMoviesRequest());
        axios.get('http://127.0.0.1:8000/api/movies')
            .then(response => {
                const movies = response.data;
                dispatch(fetchMoviesSuccess(movies));

            })
            .catch(error => {
                dispatch(fetchMoviesFailure(error.message));
            })
    }
}


export function fetchMoviesRequest() {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

export function fetchMoviesSuccess(movies) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export function fetchMoviesFailure(error) {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
}
// ? END OF FETCH BLOGS ACTIONS SECTION
// TOP RATED MOVIE
export function viewMoviesRequest() {
    return {
        type: VIEW_MOVIES_REQUEST
    }
}

export function viewMoviesSuccess(movies) {
    return {
        type: VIEW_MOVIES_SUCCESS,
        payload: movies
    }
}

export function viewMoviesFailure(error) {
    return {
        type: VIEW_MOVIES_FAILURE,
        payload: error
    }
}




// ! DELETE BLOG ACTIONS SECTION
export function deleteMovieRequest() {
    return {
        type: DELETE_MOVIE_REQUEST
    }
}

export function deleteMovieSuccess(movies) {
    return {
        type: DELETE_MOVIE_SUCCESS,
        payload: movies
    }
}
export function deleteMovieFailure(error) {
    return {
        type: DELETE_MOVIE_FAILURE,
        payload: error
    }
}
export const deleteMovie = (id) => {
    return (dispatch) => {
        dispatch(deleteMovieRequest());
        axios.delete(`http://127.0.0.1:8000/api/movies/${id}`).then(response => {
            dispatch(deleteMovieSuccess(id));
        }).catch(error => {
            dispatch(deleteMovieFailure(error.message));
        }
        )
    }
}

// ! END OF DELETE BLOG ACTIONS SECTION

// * ADD BLOG ACTIONS SECTION
export function addMovieRequest() {
    return {
        type: ADD_MOVIE_REQUEST
    }
}

export function addMovieSuccess(movie) {
    return {
        type: ADD_MOVIE_SUCCESS,
        payload: movie
    }
}
export function addMovieFailure(error) {
    return {
        type: ADD_MOVIE_FAILURE,
        payload: error
    }
}

export const addMovie = (movie) => {
    return (dispatch) => {
        dispatch(addMovieRequest());
        axios.post('http://127.0.0.1:8000/api/movies', movie).then(response => {
            dispatch(addMovieSuccess(response.data));
            console.log(response.data);
        }).catch(error => {
            dispatch(addMovieFailure(error.message));
        }
        )
    }
}

// * END OF ADD BLOG ACTIONS SECTION


// * SEARCH BLOG ACTIONS SECTION
export function searchMovieRequest() {
    return {
        type: SEARCH_MOVIE_REQUEST
    }
}

export const searchMovie = (search) => {
    return (dispatch) => {
        dispatch(searchMovieRequest());
        axios.get(`http://127.0.0.1:8000/api/movies/search/${search}`)
            .then(response => {
                const movies = response.data;
                dispatch(fetchMoviesSuccess(movies));
            })
            .catch(error => {
                dispatch(fetchMoviesFailure(error.message));
            })
    }
}

export const viewMovies=(view)=>{
    return (dispatch) => {
        dispatch(viewMoviesRequest());
        axios.get('http://127.0.0.1:8000/api/topmovies')
            .then(response => {
                const movies = response.data;
                dispatch(viewMoviesSuccess(movies));

            })
            .catch(error => {
                dispatch(viewMoviesFailure(error.message));
            })
    }
}

// * END OF SEARCH BLOG ACTIONS SECTION

// * UPDATE BLOG ACTIONS SECTION
export function updateMovieRequest() {
    return {
        type: UPDATE_MOVIE_REQUEST
    }
}

export const updateMovie = (movie) => {
    return (dispatch) => {
        dispatch(updateMovieRequest());
        axios.put(`http://127.0.0.1:8000/api/movies/${movie.id}`, movie).then(response => {
            dispatch(fetchMovies());
            console.log(response.data);
        }).catch(error => {
            dispatch(fetchMoviesFailure(error.message));
        })

    }





    
}



// LATEST MOVIE SECTION 
export function latestMoviesRequest() {
    return {
        type: VIEW_MOVIES_REQUEST
    }
}

export function latestMoviesSuccess(movies) {
    return {
        type: LATEST_MOVIE_SUCCESS,
        payload: movies
    }
}




export function latestMoviesFailure(error) {
    return {
        type: LATEST_MOVIE_FAILURE,
        payload: error
    }
}


export const latestMovie=(view)=>{
    return (dispatch) => {
        dispatch(latestMoviesRequest());
        axios.get('http://127.0.0.1:8000/api/latestMovie')
            .then(response => {
                const movies = response.data;
                dispatch(latestMoviesSuccess(movies));

            })
            .catch(error => {
                dispatch(latestMoviesFailure(error.message));
            })
    }
}