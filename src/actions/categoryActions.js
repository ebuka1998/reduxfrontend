import axios from 'axios'
import { CREATE_CATEGORY, CATEGORY_ERROR, LIST_CATEGORY, LIST_CATEGORY_ERROR } from '../constants/categoryConstants'
import setToken from '../utils/setToken';




const createCategoryy = (dataToSubmit) => async (dispatch) => {
    try {
        if (window.localStorage.token ) {
            setToken(localStorage.token)
        }
        const {data} = await axios.post('http://localhost:5000/api/category/create', dataToSubmit)
        dispatch({type: CREATE_CATEGORY, payload: data})
    } catch (error) {
        dispatch({type: CATEGORY_ERROR, payload: error.message})
    }
}

const listCategory = () => async (dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:5000/api/categories')
        dispatch({type: LIST_CATEGORY, payload: data})
    } catch (error) {
        dispatch({type: LIST_CATEGORY_ERROR, payload: error.message})
    }
}


export {createCategoryy, listCategory}


