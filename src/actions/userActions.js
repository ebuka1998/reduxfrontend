import axios from 'axios'
import { 
    REGISTER_USER,
    LOGIN_USER,
    REGISTER_USER_ERROR,
    REGISTER_USER_REQUEST,
    LOGIN_USER_REQUEST, LOGIN_USER_ERROR } from '../constants/userConstants'


const register = (dataToSubmit) => async (dispatch)  => {
    dispatch({type: REGISTER_USER_REQUEST, payload: dataToSubmit})
    try {
        const {data} = await axios.post('http://localhost:5000/users/register', dataToSubmit)
        dispatch({type: REGISTER_USER, payload: data})
    } catch (error) {
        dispatch({type: REGISTER_USER_ERROR, payload: error.message})
    }
}

const login = (dataToSubmit) => async (dispatch) => {
    dispatch({type: LOGIN_USER_REQUEST, payload: dataToSubmit})
    try {
        const {data} = await axios.post('http://localhost:5000/users/login', dataToSubmit)
        dispatch({type: LOGIN_USER, payload: data.user})
        window.localStorage.setItem('userInfo', JSON.stringify(data.user))
        window.localStorage.setItem('token', data.token)
    } catch (error) {
        dispatch({type: LOGIN_USER_ERROR, payload: error.message})
    }
}


export {register, login}