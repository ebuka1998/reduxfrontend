import React, {useEffect, useState} from 'react'
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux'
import Card from '../components/Card';
import { productList } from '../actions/productActions'
import {Link} from 'react-router-dom'
import { Row, Col, Input, Button } from 'antd'
import "antd/dist/antd.css"
import { listCategory } from '../actions/categoryActions'
import { cartAdd } from '../actions/cartActions'
import {useCombobox} from 'downshift'
import '.././App.css'


const Home = (props) => {

    const category = props.match.params.id ? props.match.params.id : ''

    const dispatch = useDispatch()

    const productss = useSelector(state => state.listProduct)

    const {products} = productss

    const listCategoryY = useSelector(state => state.listCategories)

    const {categories} = listCategoryY

    const cartss = useSelector(state => state.cart)

    const {items} = cartss

    const [searchKeyWord] = useState('')

    const [sortOrder, setSortOrder] = useState('')

    const [visible, setVisible] = useState(3)

    const [inputItems, setInputItems] = useState([])
  
    useEffect(() => {
        dispatch(productList(category, searchKeyWord, sortOrder))
    }, [category])

    useEffect(() => {
        dispatch(listCategory())
    }, [])

    const loadMore = (e) => {
        e.preventDefault()
        setVisible(visible + 3)
    }

    const sortHandler = (e) => {
        setSortOrder(e.target.value);
        dispatch(productList(category, searchKeyWord, sortOrder))
    }

    //down shift
    const {isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps} = useCombobox({
          items: inputItems,
          onInputValueChange: ({inputValue}) => {
              setInputItems(
                  products.filter(item => item.name.toLowerCase().startsWith(inputValue.toLowerCase()))
              )
          }
    })
 
    return (
        <div>
            <Header/>
            <div style={{marginTop: '30px'}}>
                <ul className="filter">
                    <li>
                        <div {...getComboboxProps()}>
                            <Input 
                                {...getInputProps()}
                                placeholder='search for product'
                                size='large'
                            />
                        </div>
                        <ul {...getMenuProps()} style={{display: 'block', listStyle: 'none'}}>
                            {isOpen && 
                                inputItems.map((item, index) => (
                                    <span key={item._id} {...getItemProps({item, index})}>
                                        <li style = {highlightedIndex === index ? {backgroundColor: '#ede', textDecoration: 'none'} : {}}>
                                            <h4>
                                                <Link to = {`product/${item._id}`} style={{color: 'black', textDecoration: 'none'}}>
                                                    {item.name}
                                                </Link>
                                            </h4>
                                        </li>
                                    </span>
                                )).slice(0, 3)
                            
                            }
                        </ul>
                    </li>
                    <li>
                        Sort By {' '}
                        <select name="sortOrder" onChange={sortHandler}>
                        <option value="">Newest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                        </select>
                    </li>
                </ul>

                <h3 style={{textAlign: 'center'}}>categories</h3>
               <div style={{display: 'flex', justifyContent: 'center'}}>    
                {categories && categories.map(x => (
                        <div key={x._id} style={{display: 'inline-block', padding: '20px'}} >
                            <h3>
                                <Link to = {'/category/' + x.name} style={{textDecoration: 'none', color: '#d3d3d3'}}>{x.name}</Link>
                            </h3>
                        </div>
                    ))}
               </div>


                 { category && <h2 style={{textAlign: 'center'}}>{category}</h2> }
                <Row>
                    {products && products.slice(0, visible).map(product => (
                        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} key={product._id} >
                            <div >
                                <Card   name={product.name}
                                        price={product.price} 
                                        id={product._id}
                                        addCart={(e) => dispatch(cartAdd(items, product))}  
                                 />
                            </div>
                        </Col>         
                    ))}                     
                </Row>
                    
                                
                {
                    products && products.length > visible    &&
                
                        <div style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
                            <Button type="primary" size={"large"} onClick={loadMore}>
                                Load more
                            </Button>
                        </div>
                    
                    
                }
            </div>   
        </div>
    )
}

export default Home
