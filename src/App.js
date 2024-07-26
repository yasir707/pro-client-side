import { useState } from 'react'
import './App.css';
import { Routes , Route  } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './components/user/home_pages/Home.jsx';
import SignIn from './components/auth/Sign-in/SignIn.jsx';
import SignUp from './components/auth/Sign-up/SignUp.jsx';
import ProductView from './components/user/home_pages/ProductView.jsx';
import SellerProfile from './components/user/sellerProfile/SellerProfile.jsx';
import AddProduct from './components/user-profile/addProduct/AddProduct.jsx';
import SeeYourPosts from './components/user-profile/seeYourPosts/SeeYourPosts.jsx';
import EditProduct from './components/user-profile/editProduct/EditProduct.jsx';
import UserProfile from './components/user-profile/userProfile/UserProfile.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route  path='/' element={<Home/>}></Route>
        <Route  path='/SignIn' element={<SignIn/>}></Route>
        <Route  path='/SignUp' element={<SignUp/>}></Route>
        <Route path="/ProductView/:productId" element={<ProductView/>}/>
        <Route path="/SellerProfile/:userId" element={<SellerProfile/>}/>
        <Route path="/AddProduct" element={<AddProduct/>}/>
        <Route path="/SeeYourPosts" element={<SeeYourPosts/>}/>
        <Route path="/EditProduct/:productId" element={<EditProduct/>}/>
        <Route path="/UserProfile" element={<UserProfile/>}/>
      </Routes>
    </>
  )
}

export default App
