import React, {useState} from 'react'
import { Form, Input, Button} from 'antd'
import {useDispatch} from 'react-redux'
import "antd/dist/antd.css"
import { createCategoryy } from '../../actions/categoryActions'



const CreateCategory = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleChange = (e) => {
      setName(e.currentTarget.value)
    }

    const onSubmit = () => {
      let dataToSubmit = {name}
      dispatch(createCategoryy(dataToSubmit))
    }

    const layout = {labelCol: {span: 8,}, wrapperCol: {span: 8,}}
    const tailLayout = {wrapperCol: {offset: 8,span: 16,}}
    
    return (
        <div style={{marginTop: '200px'}}>
          <Form {...layout} name="basic">

          <Form.Item label="Category" name="category" rules={[{required: true,message: 'please write a category',},]}>
            <Input value={name} onChange={handleChange}/>
          </Form.Item>
        
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
        </div>
    )
}

export default CreateCategory
