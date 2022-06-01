import React from 'react'
import { useFetch } from '../hooks/useFetch';

type Repository = {
  full_name: string;
  description: string;
}

type User = {
  username: string;
  password: string;
}

const Repositories = () => {
  const { data: user, error, isFetching } =
    useFetch<User[]>('http://127.0.0.1:8000/auth')

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {user?.map(repo => {
        return (
          <li key={repo.username}>
            <strong>{repo.password}</strong>
          </li>
        )
      })}
    </ul>
  )
}

export default Repositories