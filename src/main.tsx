import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { AuthProvider } from './context/AuthProvider'
import Begin from './components/Begin/Begin';
import Homepage from './components/Homepage/Homepage';
import Trainer from './components/Trainer/Trainer';
import TrainerCard from './components/Trainer/TrainerCard';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='begin' element={<Begin />} />
          <Route path='homepage' element={<Homepage />} />
          <Route path='training' element={<Trainer />} />

        </Routes>
      </BrowserRouter> 
    </AuthProvider>
  </React.StrictMode>
)
