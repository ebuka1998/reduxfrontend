import {
    ADD_TO_CART_ERROR,
    ADD_TO_CART,
    INCREASE,
    INCREASE_ERROR,
    DECREASE,
    DECREASE_ERROR,
    REMOVE_FROM_CART,
    REMOVE_FROM_CART_ERROR,
    CLEAR_CART,
    CLEAR_CART_ERROR,
} from '../constants/cartConstant';




function cartReducer(state = {}, action) {
    switch(action.type) {
        case ADD_TO_CART:
          return {  ...state, items: action.payload.cartItems }     
        case ADD_TO_CART_ERROR:
        case INCREASE_ERROR:
        case DECREASE_ERROR:
        case REMOVE_FROM_CART_ERROR:
        case CLEAR_CART_ERROR:
          return {error: action.payload}
        case INCREASE:
        case DECREASE:
          return {...state, items: action.payload.cartItems}
        case REMOVE_FROM_CART:
        case CLEAR_CART:
          return {  ...state, items: action.payload.cartItems }
        default:
            return state
    }
}


export {cartReducer}

/**
 *  import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, items: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { ...state, items: action.payload.cartItems };

    default:
      return state;
  }
}
 */