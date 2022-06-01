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
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>
  </React.StrictMode>
)
