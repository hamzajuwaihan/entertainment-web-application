import moviesReducer from "./movies/moviesReducer";
import { combineReducers } from 'redux'
import usersReducer from "./users/usersReducer";


const rootReducer = combineReducers({
    movies: moviesReducer,
    user: usersReducer
})

export default rootReducer;