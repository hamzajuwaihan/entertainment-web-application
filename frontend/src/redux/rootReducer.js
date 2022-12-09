// import blogsReducer from "./blogs/blogsReducer";
import { combineReducers } from 'redux'
import usersReducer from "./users/usersReducer";


const rootReducer = combineReducers({
    // blogs: blogsReducer,
    user: usersReducer
})

export default rootReducer;