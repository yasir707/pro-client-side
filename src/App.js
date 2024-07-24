import { useState } from 'react'
import './App.css';
import { Routes , Route  } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './components/user/home_pages/Home.jsx';
import SignIn from './components/auth/Sign-in/SignIn.jsx';
import SignUp from './components/auth/Sign-up/SignUp.jsx';
import ProductView from './components/user/home_pages/ProductView.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route  path='/SignIn' element={<SignIn/>}></Route>
        <Route  path='/SignUp' element={<SignUp/>}></Route>
        <Route path="/ProductView/:productId" element={<ProductView/>}/>
      </Routes>
    </>
  )
}

export default App
