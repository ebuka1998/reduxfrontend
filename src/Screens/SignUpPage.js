import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Form, Input, Button} from 'antd'
import "antd/dist/antd.css"
import { register } from '../actions/userActions'


const SignUpPage = (props) => {

  const registerUser = useSelector(state => state.registerUser)

  const dispatch = useDispatch()

  const {userInfo, error, loading} = registerUser


  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAdmin] = useState(false)


  const layout = {labelCol: {span: 8,}, wrapperCol: {span: 8,}}
  const tailLayout = {wrapperCol: {offset: 8,span: 16,}}
  
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/'

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect)
      window.localStorage.setItem('token', userInfo.token)
      window.localStorage.setItem('user', userInfo)
    }
  }, [userInfo]);
   
  const handleName = (e) => {
    setName(e.currentTarget.value)
  }

  const handleEmail = (e) => {
    setEmail(e.currentTarget.value)
  }

  const handlePassword = (e) => {
    setPassword(e.currentTarget.value)
  }

  const registerr = () => {
      let dataToSubmit = {name, email, password, isAdmin}
      dispatch(register(dataToSubmit))
  }

    return (
        <div style={{marginTop: '200px'}}>
          {loading && <div>loading...</div>}
          {error && <div>{error}</div>}
        <Form
            {...layout}
            name="basic"
      >
        <Form.Item
          label="Username"
          name="username"
         
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input onChange = {handleName} value={name} />
        </Form.Item>

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
          <Button type="primary" htmlType="submit" onClick={registerr}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
    )
}

export default SignUpPage
