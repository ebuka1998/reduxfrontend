import {
    CREATE_PRODUCT_ERROR,
    CREATE_PRODUCT,
    PRODUCT_LIST,
    PRODUCT_LIST_ERROR,
    GET_PRODUCT,
    GET_PRODUCT_ERROR
} from '../constants/productConstant';



function createProduct(state ={}, action) {
    switch(action.type) {
        case CREATE_PRODUCT:
            return {product: action.payload}

        case CREATE_PRODUCT_ERROR:
            return {error: action.payload}
        default:
            return state
    }
}

function listProduct(state = [], action) {
    switch(action.type) {
        case PRODUCT_LIST:
            return {products: action.payload}

        case PRODUCT_LIST_ERROR:
            return {error: action.payload}
        default:
            return state
    }
}

function getProduct(state = {}, action) {
    switch(action.type) {
        case GET_PRODUCT:
            return {produc: action.payload}

        case GET_PRODUCT_ERROR:
            return {error: action.payload}
        default:
            return state
    }
}



export {createProduct, listProduct, getProduct}