import React, {useState, useEffect} from 'react'
import { Form, Input, Button} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import "antd/dist/antd.css"
import { listCategory } from '../../actions/categoryActions'
import { productCreate } from '../../actions/productActions';


//const { Option } = Select

const CreateProduct = () => {
    const dispatch = useDispatch()
    const listCategoryY = useSelector(state => state.listCategories)
    const {categories} = listCategoryY

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')

    const handleName = e => {
        setName(e.currentTarget.value)
    }

    const handleDescription = e => {
        setDescription(e.currentTarget.value)
    }

    const handlePrice = e => {
        setPrice(e.currentTarget.value)
    }

    const handleCategory = e => {
        setCategory(e.target.value)
    }


    const onSubmit = e => {
        e.preventDefault()
        let dataToSubmit = {name, description, price, category}
        console.log(dataToSubmit)
        dispatch(productCreate(dataToSubmit))
    }


    useEffect(() => {
        dispatch(listCategory())
    }, [])

    
    const layout = {labelCol: {span: 8,}, wrapperCol: {span: 8,}}
    const tailLayout = {wrapperCol: {offset: 8,span: 16,}}

    return (
        <div style={{marginTop: '200px'}}>
            <Form {...layout} name="basic" >
                <Form.Item label="Name" name="Name" rules={[{required: true,message: 'name of product please',},]} >
                    <Input onChange={handleName} value={name} />
                </Form.Item>

                <Form.Item label="Description" name="Description" rules={[{required: true,message: 'please write a description',},]} >
                    <Input onChange = {handleDescription} value={description}/>
                </Form.Item>

                <Form.Item label="Price" name="Price" rules={[{required: true,message: 'please put a price',},]} >
                    <Input onChange={handlePrice} value={price} />
                </Form.Item>

                {/* <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                    <Select placeholder="Select a option and change input text above" allowClear onChange={handleCategory}>
                        {categories && categories.map(x => (
                            <Option key={x._id}  value={x.name}>
                                {x.name}
                            </Option>
                        ))}
                    </Select>
                </Form.Item> */}

                <select name='select' onChange={handleCategory}>
                        {categories && categories.map(x => (
                            <option key={x._id}  value={x.name}>
                                {x.name}
                            </option>
                        ))}
                </select>
                
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={onSubmit} >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateProduct
