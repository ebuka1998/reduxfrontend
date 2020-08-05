import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Form, Input, Button} from 'antd'
import "antd/dist/antd.css"
import { login } from '../actions/userActions';

const LoginPage = (props) => {

    const loginUser = useSelector(state => state.loginUser)

    const {userInfo, loading, error} = loginUser

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/'

    useEffect(() => {
        if (userInfo) {
          props.history.push(redirect)
        }
        return () => {
          //
        };
      }, [userInfo]);

    
    const layout = {labelCol: {span: 8,}, wrapperCol: {span: 8,}}
    const tailLayout = {wrapperCol: {offset: 8,span: 16,}}
    
    

    const handleEmail = (e) => {
        setEmail(e.currentTarget.value)
    }
    
    const handlePassword = (e) => {
        setPassword(e.currentTarget.value)
    }
    
    const loginn = (e) => {
        e.preventDefault()
        let dataToSubmit = { email, password}
        dispatch(login(dataToSubmit))
    }
    return (
        <div style={{marginTop: '200px'}}>
        {loading && <div>loading...</div>}
          {error && <div>{error}</div>}
        <Form
            {...layout}
            name="basic"
            initialValues={{
            remember: true,
            }}
      
      >

        <Form.Item
          label="Email"
          name="email"
         
          rules={[
            {
              required: true,
              message: 'Please input your emai!',
            },
          ]}
        >
          <Input onChange = {handleEmail} value={email} />
        </Form.Item>
        
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password onChange = {handlePassword} value={password}/>
        </Form.Item>
  

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={loginn}>
            Submit
          </Button>
        </Form.Item>
      </Form>
        </div>
    )
}

export default LoginPage
