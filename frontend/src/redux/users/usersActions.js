import axios from "axios"

import { EDIT_USER_REQUEST, GET_ALL_USERS_FAILURE, GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./usersTypes"

// users Actions creators section 
export const userRegisterRequest = () => {
    return {
        type: USER_REGISTER_REQUEST
    }
}

export const userRegisterSuccess = (user) => {
    return {
        type: USER_REGISTER_SUCCESS,
        payload: user
    }
}

export const userRegisterFailure = (error) => {
    return {
        type: USER_REGISTER_FAILURE,
        payload: error
    }
}
export const userRegister = () => {
    return (dispatch) => {
        dispatch(userRegisterRequest())
       
    }
}

export const userLogout = () => {
    return {
        type: USER_LOGOUT

    }
}


export const userClearInfo = () => {

    return (dispatch) => {
        dispatch(userLogout())
        // sessionStorage.removeItem('user')
        // sessionStorage.removeItem('name')
        sessionStorage.clear();
        window.location = 'http://localhost:3000/';


    }
}

export const userLoginRequest = () => {
    return {
        type: USER_LOGIN_REQUEST
    }
}

export const userLoginSuccess = (user) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: user
    }
}

export const userLoginFailure = (error) => {
    return {
        type: USER_LOGIN_FAILURE,
        payload: error
    }
}



export const getAllUsersReqest = () => {

    return {
        type: GET_ALL_USERS_REQUEST
    }
}
export const getAllUsersSuccess = (users) => {
    return {
        type: GET_ALL_USERS_SUCCESS,
        payload: users
    }
}
export const getAllUsersFailure = (error) => {
    return {
        type: GET_ALL_USERS_FAILURE,
        payload: error
    }
}
export const getAllUsers = () => {
    return (dispatch) => {
        dispatch(getAllUsersReqest())
        axios.get('http://127.0.0.1:8000/api/users').then(response => {
            const users = response.data

            dispatch(getAllUsersSuccess(users))
        }
        ).catch(error => {
            const errorMsg = error.message
            dispatch(getAllUsersFailure(errorMsg))
        }
        )
    }
}

export const editUserRequest = () => {
    return {
        type: EDIT_USER_REQUEST
    }
}



export const editUser = (user) => {
    return (dispatch) => {
        dispatch(editUserRequest())
        axios.put('http://localhost:8000/api/users/' + user.id, user).then(response => {
            const user = response.data
            dispatch(getAllUsersSuccess(user))

        }
        ).catch(error => {
            const errorMsg = error.message
            dispatch(getAllUsersFailure(errorMsg))

        })
    }
}


// delete user 
export const deleteUser = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:8000/api/users/' + id).then(response => {
            const user = response.data
            dispatch(getAllUsersSuccess(user))

        }
        ).catch(error => {
            const errorMsg = error.message
            dispatch(getAllUsersFailure(errorMsg))

        })
    }
}