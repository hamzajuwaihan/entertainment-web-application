
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS, DELETE_MOVIE_REQUEST, DELETE_MOVIE_SUCCESS, DELETE_MOVIE_FAILURE, ADD_MOVIE_REQUEST, ADD_MOVIE_SUCCESS, ADD_MOVIE_FAILURE, SEARCH_MOVIE_REQUEST, UPDATE_MOVIE_REQUEST
    ,VIEW_MOVIES_REQUEST,VIEW_MOVIES_SUCCESS,VIEW_MOVIES_FAILURE, LATEST_MOVIE_REQUEST, LATEST_MOVIE_SUCCESS, LATEST_MOVIE_FAILURE } from "./moviesType";

const initialState = {
    loading: false,
    movies: [],
    error: ''
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: ''
            }
        case FETCH_MOVIES_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload
            }

            //top rated movies
        case VIEW_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case VIEW_MOVIES_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: ''
            }
        case VIEW_MOVIES_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload
            }


        case DELETE_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: state.movies.filter(movie => movie.id !== action.payload)
            }
        case DELETE_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ADD_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_MOVIE_SUCCESS:
            return {
                ...state,
                loading: false,
                movies: [...state.movies, action.payload]
            }
        case ADD_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case SEARCH_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }

             // latest movies
        case LATEST_MOVIE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LATEST_MOVIE_SUCCESS:
            return {
                loading: false,
                movies: action.payload,
                error: ''
            }
        case LATEST_MOVIE_FAILURE:
            return {
                loading: false,
                movies: [],
                error: action.payload
            }







        default: return state
    }
}

export default moviesReducer;