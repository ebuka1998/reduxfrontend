import React from 'react'
import '.././App.css'
import {Link} from 'react-router-dom'

const Card = (props) => {
    return (
        <div>  
            <div className="card">
                <img src="https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Denim Jeans" style={{width:'100%'}} />
                <h1>{props.name}</h1>
                <p className="price">${''} {props.price}</p>
                {/* <p> <Link to = {`/product/${props.id}`}>view -`&gt;`</Link> </p> */}
                <p><button onClick = {(id) => props.addCart(id)}>Add to Cart</button></p>
            </div>
        </div>
    )
}

export default Card
