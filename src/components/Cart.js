import React from 'react'

const Cart = (props) => {
const {name, count, price, addCount, minusCount, removeCartItem} = props

    return (
       <div>
            
             <div style={{minWidth: '50%',height: '50%', backgroundColor: '#FBFCFC',
              marginLeft: '10%', marginTop: '50px'}}>
                <div 
                    style= {{

                    display: 'flex', 
                
                    padding: '20px',

                    justifyContent: 'space-around'
                
                
                }}
                
                
                >
                    <div style={{display: 'flex'}}>
                        <img src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""
                            style={{width: '100px', height: '100px', borderRadius:'50%'}}
                        />
                        <h3 style={{fontSize: '1.0rem', paddingTop: '40px', marginLeft: '10px'}}>{name}</h3>
                    </div>
                    
                        <div style={{paddingTop: '40px'}}>
                           <span onClick={(_id) => minusCount(_id)} style={{
                                cursor: 'pointer',
                                padding: '5px',
                                fontSize: '1.2rem'}}>
                               -
                           </span> 
                            {count} 
                           <span onClick={(_id) => addCount(_id)} style={{cursor: 'pointer', padding: '10px', fontSize: '1.2rem'}}>
                               +
                           </span>
                        </div>

                        <h3 style={{paddingTop: '40px'}}>{price}</h3>

                        <div style={{paddingTop: '40px'}}>
                           <h3 onClick = {(_id) => removeCartItem(_id)} style={{color: 'red', cursor: 'pointer'}}>x</h3>
                        </div>
                </div>
            </div>
       </div>
    )
}

export default Cart
