import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import Navbar from '../Navbar/Navbar';
import './Begin.css';


type Training = {
    training_plan_category: number;
    price: number;
    description: string;
    expiration_date: Date;
    details: string;
    number_of_sessions: number;
    notes: string;
    training_plan_id: number;
}

type User = {
    first_name: string;
}

const Begin = () => {
    const { data: training, error, isFetching } =
        useFetch<Training[]>('http://localhost:8000/user/')

    return (
        <div className='box'> 
            <Navbar/>
            <p>Welcome to our Softly's page</p>

            <ul>
                {isFetching && <p>Carregando...</p>}
                {training?.map(train => {
                    return (
                        <li key={train.training_plan_id}>
                            <strong>{train.price}</strong>
                            <p>{train.description}</p>
                            <p>{train.details}</p>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default Begin