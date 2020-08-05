import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Home from './Screens/Home';
import SignUpPage from './Screens/SignUpPage';
import LoginPage from './Screens/LoginPage';
import CreateProduct from './Screens/products/CreateProduct';
import CreateCategory from './Screens/products/CreateCategory';
import ProductDetail from './Screens/ProductDetail';
import CartScreen from './Screens/CartScreen';

function App() {
  return (
      <Router>
          <Switch>
            <Route exact path='/' component = {Home}/>
            <Route exact path='/category/:id' component = {Home}/>
            <Route exact path='/product/:id' component = {ProductDetail}/>
            <Route exact path='/cart' component = {CartScreen}/>
            <Route exact path='/login' component = {LoginPage}/>
            <Route exact path='/register' component = {SignUpPage}/>     
            <Route exact path='/createproduct' component = {CreateProduct}/>     
            <Route exact path='/createcategory' component = {CreateCategory}/>     
          </Switch>
      </Router>
  );
}

export default App;
