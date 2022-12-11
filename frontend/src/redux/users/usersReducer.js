import { DELETE_USER_REQUEST, EDIT_USER_FAILURE, EDIT_USER_REQUEST, EDIT_USER_SUCCESS, GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./usersTypes"


const initialState = {
    loading: false,
    user: {},
    error: '',
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case USER_REGISTER_FAILURE:
            return {
                loading: false,
                user: {},
                error: action.payload
            }
        case USER_LOGOUT:
            return {
                loading: false,
                user: {},
                error: ''

            }
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                error: ''
            }
        case USER_LOGIN_FAILURE:
            return {
                loading: false,
                user: {},
                error: action.payload
            }
        case GET_ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case GET_ALL_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case EDIT_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        default: return state
    }
}

export default usersReducer