import {createStore, compose, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { userRegisterReducer, userLoginReducer } from './reducers/userReducer'
import { createCategory, listCategories } from './reducers/categoryReducer'
import { createProduct, listProduct, getProduct } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';



const userInfo = JSON.parse(window.localStorage.getItem('userInfo')) || null

const cartItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];

const initialState = { cart: { items: cartItems }, loginUser:  {userInfo: userInfo}  } 


const reducer = combineReducers({
    registerUser: userRegisterReducer,
    loginUser: userLoginReducer,
    categoryCreate: createCategory,
    listCategories: listCategories,
    createProduct: createProduct,
    listProduct: listProduct,
    getProduct: getProduct,
    cart: cartReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store