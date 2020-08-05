import axios from 'axios'
import {
    CREATE_PRODUCT,
    CREATE_PRODUCT_ERROR,
    PRODUCT_LIST,
    PRODUCT_LIST_ERROR,
    GET_PRODUCT,
    GET_PRODUCT_ERROR
} from '../constants/productConstant';
import setToken from '../utils/setToken';



const productCreate = (dataToSubmit) => async (dispatch)  => { 
    try {
        if (window.localStorage.token ) {
            setToken(localStorage.token)
        }
        const {data} = await axios.post('http://localhost:5000/api/product/create', dataToSubmit)
        dispatch({type: CREATE_PRODUCT, payload: data})
    } catch (error) {
        dispatch({type: CREATE_PRODUCT_ERROR, payload: error.message})
    }
}

const productList = (category = '', searchKeyWord = '', sortOrder = '') => async (dispatch) => {
    try {
        const {data} = await axios.get('http://localhost:5000/api/products?category='+ category +
        "&searchKeyWord=" + searchKeyWord + "&sortOrder=" + sortOrder )
        dispatch({type: PRODUCT_LIST, payload: data})
        //console.log(data)
    } catch (error) {
        dispatch({type: PRODUCT_LIST_ERROR, payload: error.message})
    }
} 

const productGet = (_id) => async (dispatch) => {
    try {
        const {data} = await axios.get(`http://localhost:5000/api/product/${_id}`)
        dispatch({type: GET_PRODUCT, payload: data})
    } catch (error) {
        dispatch({type: GET_PRODUCT_ERROR, payload: error.message})
    }
}

export {productCreate, productList, productGet}