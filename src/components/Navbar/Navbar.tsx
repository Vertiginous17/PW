import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <div className="topnav">
                <Link to='/profile/'>Profile</Link>    
                <div className='align-right'>
                    <Link to='/begin/'>Begin</Link>
                    <Link to='/training/'>Train</Link>
                    <Link to='/explore/'>Explore</Link>
                    <Link to='/exercise/'>Exercise</Link>    
                </div>
            </div>
        </div>

    )
}

export default Navbar