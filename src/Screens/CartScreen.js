import React from 'react'
import Cart from '../components/Cart'
import {useSelector, useDispatch} from 'react-redux'
import Header from '../components/Header'
import { increase, decrease, removeFromCart, clearCart } from '../actions/cartActions'

import { Button } from 'antd'
import "antd/dist/antd.css"




const CartScreen = () => {
    const cartItems = useSelector(state => state.cart)
    const {items} = cartItems
    const dispatch = useDispatch()

    const cartClear = (e) => {
      e.preventDefault()
      dispatch(clearCart())
    }
   

    return (
        <div>
            <Header/>
            {
              items.length === 0 ? (
                <div style={{textAlign: 'center', paddingTop: '20px', fontSize: '1.2rem'}}> your Cart is empty</div>
              ) : (
                <div style={{textAlign: 'center', paddingTop: '20px', fontSize: '1.2rem'}}>
                  You have {items.length} items in the basket
                </div>
              )
            }
          
          
 
            
          <div style={{display: 'flex', justifyContent: 'flex-start'}}>
            
            <div style={{width: '60%'}}>
              {items && items.map(item => (
                  <div key = {item._id}>
                  
                      <Cart 
                        
                        name={item.name} 
                        count={item.count} price={item.price} 
                        addCount = {() => dispatch(increase(items, item))}
                        minusCount = {() => dispatch(decrease(items, item))}
                        removeCartItem={() => dispatch(removeFromCart(items, item))}
                      
                      />
                  
                  </div>
                
              ))}
              {items.length === 0 ? '' : (
                 <div style={{marginLeft: '10%', paddingTop: '20px'}}>
                    <Button type="danger" size={"large"} onClick={cartClear} style={{width: '100%'}}>
                      clear Cart
                  </Button>
                 </div>
              )}
             
            </div>
            
          {items.length === 0 ? '' : (
              <div style={{margin: '10%', paddingLeft: '10px'}}>
                <h2 >your total price: {' '}{' '}
                  ${items && items.reduce((a, c) => a + c.price * c.count, 0)}
                </h2>
                <br/><br/>
                <Button type="primary" size={"large"}>
                  Checkout
                </Button>
              </div> 
          )}



          </div>
              
        </div>
    )
}

export default CartScreen
/**
 *  return (
      <div className="alert alert-info">
        {cartItems.length === 0 ? (
          "Basket is empty"
        ) : (
          <div>
            You have {cartItems.length} items in the basket. <hr />
          </div>
        )}
        {cartItems.length > 0 && (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    style={{ float: "right" }}
                    className="btn btn-danger btn-xs"
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartItems, item)
                    }
                  >
                    X
                  </button>
                  <br />
                  {item.count} X {util.formatCurrency(item.price)}
                </li>
              ))}
            </ul>

            <b>
              Sum:{" "}
              {util.formatCurrency(
                cartItems.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>
            <button
              onClick={() => alert("Todo: Implement checkout page.")}
              className="btn btn-primary"
            >
              checkout
            </button>
          </div>
        )}
      </div>
    );
  }
}
 */