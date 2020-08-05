import { CREATE_CATEGORY, CATEGORY_ERROR, LIST_CATEGORY, LIST_CATEGORY_ERROR } from '../constants/categoryConstants';


function createCategory(state ={}, action) {
    switch(action.type) {
        case CREATE_CATEGORY:
            return {category: action.payload}

        case CATEGORY_ERROR:
            return {error: action.payload}
        default:
            return state
    }
}


function listCategories(state = [], action) {
    switch(action.type) {
        case LIST_CATEGORY:
            return {categories: action.payload}
        case LIST_CATEGORY_ERROR:
            return {error: action.payload}
        default:
            return state
    }
}



export {createCategory, listCategories}