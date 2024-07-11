mport './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavbarNew from './componants/NavbarNew';
import Home from './componants/Home'
import ProductInfo from './componants/productinfo';
import Cart from './componants/Cart';
import React, { useState } from 'react';
import {CartProvider} from 'react-use-cart';
 import logo from './logo.svg';
 import './App.css';
import { Login } from './Login';
 import { Register } from "./Register";   
import Button from 'react-bootstrap/esm/Button';
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
   }
  return (
    <CartProvider>
       <Router>
    <NavbarNew/>
    <Routes>
      <Route path='/' element={<Home/>}/> 
    <Route path='/productinfo/:id' element={<ProductInfo/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
</Router>
      
   <div className='App'>
    </div>
   

  </CartProvider>
  );
}


export default App;
