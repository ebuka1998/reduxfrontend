//import axios from 'axios'
import {
    ADD_TO_CART,
    ADD_TO_CART_ERROR,
    INCREASE,
    INCREASE_ERROR,
    DECREASE,
    DECREASE_ERROR,
    REMOVE_FROM_CART,
    REMOVE_FROM_CART_ERROR,
    CLEAR_CART,
    CLEAR_CART_ERROR,
   
    
} from '../constants/cartConstant'

const cartAdd = (items=[], product) => async (dispatch) => {
    try {
        const cartItems = items.slice()
        let productInCart = false

        cartItems.forEach((cp) => {
            if(cp._id === product._id) {
                alert('product already in cart you can increase your desired quantity in cart')
                //cp.count += 1
                productInCart = true
            }
        })

        if (!productInCart) {
            cartItems.push({ ...product, count: 1 });
          }
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          dispatch({ type: ADD_TO_CART, payload: { cartItems } });
    } catch (error) {
        dispatch({
            type: ADD_TO_CART_ERROR,
            payload: error.message
        })
    }
}

const increase = (items, product) => async (dispatch) => {
  try {
    const cartItems = items.slice()

    cartItems.map(item => {
      if(item._id === product._id) {
        product.count++
      }
    })

    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    dispatch({ type: INCREASE, payload: { cartItems } });
  } catch (error) {
    dispatch({
      type: 
      INCREASE_ERROR,
      payload: error.message
  })
  }
}

const decrease = (items, product) => async (dispatch) => {
  try {
    const cartItems = items.slice()

    cartItems.map(item => {
      if(item._id === product._id) {
        product.count--
      }
    })

    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    dispatch({ type: DECREASE, payload: { cartItems } });
  } catch (error) {
    dispatch({
      type: 
      DECREASE_ERROR,
      payload: error.message
  })
  }
}

const removeFromCart = (items, product) => (dispatch) => {
  try {
    const cartItems = items.slice().filter((item) => item._id !== product._id)

    localStorage.setItem("cartItems", JSON.stringify(cartItems))

    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } })
  } catch (error) {
    dispatch({
      type: REMOVE_FROM_CART_ERROR,
      payload: error.message
  })
  }
}

const clearCart = (items = [], product) => (dispatch) => {
  try {
    const cartItems = items.slice()

    if(cartItems.length > 1 ) {
      localStorage.removeItem("cartItems")
      cartItems = []
    }

    dispatch({ type: CLEAR_CART, payload: {cartItems} })
  } catch (error) {
    dispatch({
      type: CLEAR_CART_ERROR,
      payload: error.message
  })
  }
}




export { cartAdd, increase, decrease, removeFromCart, clearCart }

/**
export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id)
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};

 */