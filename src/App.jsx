import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import ProductListPage from "./pages/ProductListPage";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SingleProductPage from './pages/SingleProductPage';

function App() {
  function Login(){
     return new Promise((res)=>{
      setTimeout(res({name:"Edward",token:"AOQGKICVOGJANGO"}),1000)
    })
  }
  Login.then((value)=>{
    console.log(value);
  })

  console.log(Login);

  function Logout(){
    return new Promise((res)=>{
      setTimeout(res(true),1000)
    })
  }



  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/home" element={<HomePage/>}/>
      <Route path="/productlist" element={<ProductListPage/>}/>
      <Route path="/product/:id" element={<SingleProductPage/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>

    </Routes>
    </BrowserRouter>
  
  )
}

export default App
