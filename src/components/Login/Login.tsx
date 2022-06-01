import React from 'react';
import { useRef, useState, useEffect, useContext, FC } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';

// url to comunicate with axios,  which matches the backend
const LOGIN_URL = '/auth';

const Login = () => {
    // const { data, isFetching } = useFetch<Log[]>(LOGIN_URL)

    const userRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const errRef = useRef<HTMLDivElement>(null);

    // user
    const [user, setUser] = useState('');
    // password 
    const [pwd, setPwd] = useState('');
    // error msg
    const [errMsg, setErrMsg] = useState('');

    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const params = new URLSearchParams();
        params.append('username', user);
        params.append('password', pwd);
        // console.log(params);

        try {
            // console.log(user);
            const response = await axios.post(
                LOGIN_URL,
                params,
                {
                    headers: { 
                        'Content-Type': 'application/x-www-form-urlencoded',
                        "Access-Control-Allow-Origin": "*",
                    },
                    withCredentials: true
                }
                ).then((response) => {
                    if (response.data.acces_token){
                        localStorage.setItem("user", JSON.stringify(response.data));
                    }
                    // console.log(JSON.stringify(response?.data));
                    return response.data;
                })
                // if api is looking for "password", we do password: pwd
            
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            // if there is no response
            if (!err?.response) {
                setErrMsg('No response');
                // information expected not received
            } else if (err.response?.status === 400) {
                setErrMsg('Missing username or password');
                // unauthorized
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                console.log(err);
                console.log(err.response.status)
                setErrMsg('Login failed');
            }
            // @ts-ignore: Object is possibly 'null'.
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                    <div className='App'>
                    <h1>You are logged in</h1>
                    <p>
                        <Link to='/begin'>Go Home</Link>
                    </p>
                    </div>
                    
            ) : (
                <div className='App'>
                    <section>
                        <p
                            ref={errRef}
                            className={errMsg ? "errmsg" : "offscreen"}
                            aria-live="assertive">
                            {errMsg}
                        </p>
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit}>
                            {/* Username Input */}
                            <label htmlFor='username'>Username</label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                            />
                            {/* Password Input */}
                            <label htmlFor='password'>Password</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />

                            <button>Sign In</button>
                        </form>
                        <p>
                            Don't have an account?<br />
                            <span className='line'>
                                <Link to='/register'>Register</Link>
                            </span>
                        </p>
                    </section>
                </div>
            )}
        </>

    )
}

export default Login

