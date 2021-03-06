import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../../api/axios'

const Users = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        let isMounted = true;
        // cancels our request if the component unmounts
        const controller = new AbortController();
    
        const getUsers = async () => {
            try {  
                const response = await axios.get('/users', {
                    signal: controller.signal
                });
                console.log(response.data)
                // if is mounted, set the users
                isMounted && setUsers(response.data);
            } catch(err) {
                console.log(err);
            }
        }
        getUsers();

        return () => {
            // cleanup function of the useEffect
            isMounted = false;
            controller.abort();
        }
    },[])

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            }
        </article>
    )
}

export default Users