import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../../App';
import Login from '../Login/Login'
import Register from '../Register/Register'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Routing

