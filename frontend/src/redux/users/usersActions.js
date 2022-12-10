import axios from "axios"
import { useNavigate } from "react-router-dom"
import { USER_LOGIN_FAILURE, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAILURE, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./usersTypes"

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
export const userRegister = (user) => {
    return (dispatch) => {
        dispatch(userRegisterRequest())
        axios.post('http://127.0.0.1:8000/api/register', user)
            .then(response => {
                const user = response.data.user
                dispatch(userRegisterSuccess(user))
                sessionStorage.setItem('user', JSON.stringify(user));
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(userRegisterFailure(errorMsg))
                console.log(errorMsg);
            })
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
        sessionStorage.removeItem('user')
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

export const userLogin = (user) => {
    return (dispatch) => {
        dispatch(userLoginRequest())
        axios.post('http://127.0.0.1:8000/api/login', user)
            .then(response => {
                console.log(response);
                const user = response.data.user
                dispatch(userLoginSuccess(user))
                sessionStorage.setItem('user', JSON.stringify(user));
              
            })
            .catch(error => {
               
                const errorMsg = 'User Not found'
                dispatch(userLoginFailure(errorMsg))
                console.log(errorMsg);
            }
            )
    }
}

