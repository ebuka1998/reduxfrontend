import React, {useState} from 'react'
import { Menu, Badge } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import "antd/dist/antd.css"
import '.././App.css'
import {useSelector} from 'react-redux'
const { SubMenu } = Menu;

const Header = (props) => {
    const user = useSelector(state => state.loginUser)

    const cartItems = useSelector(state => state.cart)
    const {items} = cartItems

    const {userInfo} = user

    const [current, setCurrent] = useState('mail')

  

    const handleClick = e => {
        setCurrent( e.key );
      };
    
    return (
        <Menu onClick={handleClick} selectedKeys={[current + 1]} mode="horizontal" style={{width: '100%'}}>
            <Menu.Item key="mail" icon={<MailOutlined />}>
                <Link to= '/' style={{color: 'black'}}> cloth store </Link>   
            </Menu.Item>
            <Menu.Item key="app"icon={<AppstoreOutlined />}>
                Navigation Two
            </Menu.Item>

                <Menu.Item key="alipay" style={{marginLeft: '50%'}}>
                    {  
                       userInfo ? <Link style={{color: 'black'}} to='/profile'>{userInfo.name || 'userInfo'.name} </Link> : 
                    <Link to= '/register' style={{color: 'black'}}> Register </Link>
                    
                    }
                </Menu.Item>

                <Menu.Item key="alipay1">
                    { userInfo ? <Link to = '/cart'>
                    <Badge count={items && items.length}>
                        <ShoppingCartOutlined style={{fontSize: '1.3rem'}}/>
                    </Badge>
                    </Link> :
                    <Link to= '/login' style={{color: 'black'}}> Login </Link>
                    
                    }   
                </Menu.Item>

                {
                
                userInfo && userInfo.isAdmin ? 
                <SubMenu icon={<SettingOutlined />} title="Admin" >
                <Menu.ItemGroup title="product">
                    <Menu.Item key="setting:1"><Link to='/createproduct' style={{color: 'black'}}>create products</Link></Menu.Item>
                    <Menu.Item key="setting:2"><Link to = '/createcategory' style={{color: 'black'}}>create category</Link></Menu.Item>
                    <Menu.Item key="setting:3">list products</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="orders">
                    <Menu.Item key="setting:34">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu> : ''
            
            
            }
        </Menu>
        
    )
}

export default Header
