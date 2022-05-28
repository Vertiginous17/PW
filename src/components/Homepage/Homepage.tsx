import React from 'react'
import { Text } from 'react-native';
import { Outlet, Link } from 'react-router-dom';
import './Homepage.css'

const Homepage = () => {
  return (
    <div className='App'>
      <div className='title'>
        <h1>SoftFit</h1>
        <img className='logoImg' src='http://cdn.onlinewebfonts.com/svg/img_546362.png' />
      </div>
      <nav>
        <div className='subtitle'>
          <Link className='link' to="/login">Login here</Link>
          <p>Don't have an account?</p>
          <Link className='link' to="/register">Click here to register</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Homepage