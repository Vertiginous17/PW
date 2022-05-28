import React from 'react'
import Socials from './Socials'
import "./TrainerCard.css"
import {Routes, Route, useNavigate } from 'react-router-dom'

const TrainerCard = ({ title, name, desc, img }) => {

    const navigate = useNavigate();

    const navigateTrainingInfo = () => {
        navigate('/training');
    }

    return (
      <div className='App'>
        <div className="div">
            <img src={img} alt="trainer" className='img' />
            <h5>{title}</h5>
            <h3>{name}</h3>
            <p>{desc}</p>
            <button className='buttonTrainer' onClick={navigateTrainingInfo}>See more info</button>
        </div>
      </div>
    
  )
}

export default TrainerCard