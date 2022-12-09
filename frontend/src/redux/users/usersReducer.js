import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./usersTypes"


const initialState = {
    loading: false,
    user: {},
    error: ''
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

        default: return state
    }
}

export default usersReducer