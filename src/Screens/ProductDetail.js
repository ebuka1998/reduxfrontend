import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { productGet } from '../actions/productActions'
import Header from '../components/Header'
import { cartAdd } from '../actions/cartActions'


import { Button } from 'antd'
import "antd/dist/antd.css"


const ProductDetail = (props) => {
    const _id = props.match.params.id

    const dispatch = useDispatch()

    const productt = useSelector(state => state.getProduct)

    const {produc} = productt

    const cartss = useSelector(state => state.cart)

    const {items} = cartss


    useEffect(() => {
        dispatch(productGet(_id))
    }, [])

    const add = (e) => {
        e.preventDefault()

        dispatch(cartAdd(items, produc)) 
        
    }

    return (
        <div>
            <Header/>
            <div style={{display: 'flex',
             backgroundColor: 'white', justifyContent: 'flex-start', marginTop: '50px'}} >
                <div style={{marginLeft: '100px'}}>
                    <img src="https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Denim Jeans" style={{width:'150%'}} />
                </div>
                <div style={{marginLeft: '400px'}}>
                    <h1>{produc && produc.name}</h1>
                    <br/>
                    <p>{produc && produc.description}</p>
                    <br/>
                    <h2>{produc && produc.price}</h2>
                    <div >
                        <Button type="primary" size={"large"} onClick={add}>
                            add to cart
                        </Button>
                        <br/><br/>
                        <Button style={{backgroundColor: 'green', color: 'white'}} size={"large"}>
                            buy now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
