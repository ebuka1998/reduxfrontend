import {
    REGISTER_USER_REQUEST,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    LOGIN_USER_REQUEST,
    LOGIN_USER,
    LOGIN_USER_ERROR
} from '../constants/userConstants';



function userRegisterReducer(state = {}, action) {
    switch(action.type) {
        case REGISTER_USER_REQUEST:
            return {loading: true}

        case REGISTER_USER:
            return {loading: false, userInfo: action.payload}

        case REGISTER_USER_ERROR:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

function userLoginReducer(state = {}, action) {
    switch(action.type) {
        case LOGIN_USER_REQUEST:
            return {loading: true}

        case LOGIN_USER:
            return {loading: false, userInfo: action.payload}

        case LOGIN_USER_ERROR:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}



export {userRegisterReducer, userLoginReducer}