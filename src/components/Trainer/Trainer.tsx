import React from 'react'
import TrainerCard from './TrainerCard'
import "./Trainer.css"
import Navbar from '../Navbar/Navbar'

const Trainer = () => {
    return (
        <main>
            <Navbar/>
            <h2 className='trainContainerTop'>
                TRAINING ZONE
            </h2>
            <p className='trainContainer'>
                This is our trainers page. You can check our our diverse professionals and packs
            </p>

            <TrainerCard
                title="Strength Trainer"
                name="Ronnie O Sullivan"
                desc="Get big or get going"
                img="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg"
            />
            <TrainerCard
                title="Cardio Trainer"
                name="Lissa Many"
                desc="Get running or get escaping"
                img="https://www.panattasport.com/resources/home-fitness/banner-cardio.jpg"
            />
        </main>
    )
}

export default Trainer