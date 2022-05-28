import React from 'react'
import { useFetch } from '../hooks/useFetch';

type Repository = {
  full_name: string;
  description: string;
}

type User = {
  first_name: string;
}

const Repositories = () => {
  const { data: repositories, error, isFetching } =
    useFetch<Repository[]>('https://api.github.com/users/vertiginous17/repos')

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>Smthi to say</p>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default Repositories