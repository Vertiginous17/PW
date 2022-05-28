import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../api/axios'
import { Link } from 'react-router-dom';
import './Register.css'


const REGISTER_URL = '/users';

const USER_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// pwd regex requires at least one lower case letter, one upper case letter, one digit and one special character 
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    const errRef = useRef<HTMLDivElement>(null);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [category, setCategory] = useState('')

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])


    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // console.log(user, pwd);
        setSuccess(true);
        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ email: user, password: pwd, first_name:firstName, last_name:lastName, category }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response')
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } else {
                setErrMsg("Registration Failed");
            }
            // @ts-ignore: Object is possibly 'null'.
            errRef.current.focus();
        }
    }


    return (
        <div className='App'>
            <>
                {
                    success ? (
                        <section>
                            <h1>
                                Success
                            </h1>
                            <p>
                                <Link to='/login'>Sign In</Link>
                            </p>
                        </section>
                    ) : (
                        <section>
                            <p ref={errRef}
                                className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                                {errMsg}
                            </p>
                            <div className='registerDiv'>
                                <h1 className='register'>
                                    Register
                                </h1>
                                <img className='registerImage'
                                    src="data:image/png;base64,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"
                                />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='username'>
                                    Username/E-mail
                                    <span className={validName ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span className={validName || !user ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    required
                                    aria-invalid={validName ? "false" : true}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                    value={user}
                                />
                                <label htmlFor='firstName'>
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    autoComplete="off"
                                    required
                                    value={firstName}
                                />

                                <label htmlFor='lastName'>
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                    autoComplete="off"
                                    required
                                    value={lastName}
                                />

                                <label htmlFor='category'>
                                    Category
                                </label>
                                <input
                                    type="text"
                                    id="category"
                                    onChange={(e) => setCategory(e.target.value)}
                                    autoComplete="off"
                                    required
                                    value={category}
                                /> 
                                
                                <p id='uidnote' className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    4 to 24 characters.<br />
                                    Must begin with a letter.<br />
                                    Letters, numbers and symbols allowed.
                                </p>

                                <label htmlFor='password'>
                                    Password
                                    <span className={validPwd ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    required
                                    aria-invalid={validPwd ? "false" : true}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                                <p id='pwdnote' className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    8 to 24 characters.<br />
                                    Must include uppercase and lowercase letters, a number and a special character.<br />
                                    Allowed special characters:
                                    <span aria-label='exclamation mark'>!</span>
                                    <span aria-label='at symbol'>@</span>
                                    <span aria-label='hashtag'>#</span>
                                    <span aria-label='dollar sign'>$</span>
                                    <span aria-label='percent'>%</span>
                                </p>

                                <label htmlFor='confirm_pwd'>
                                    Confirm Password
                                    <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                        <FontAwesomeIcon icon={faCheck} />
                                    </span>
                                    <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                </label>
                                <input
                                    type="password"
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    required
                                    aria-invalid={validMatch ? "false" : true}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                                <p id='pwdnote' className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    The passwords should match.
                                </p>
                                {/* if we dont have a valid name, valid pwd or valid pwd match, disabled is true */}
                                <button disabled={!validName || !validPwd || !validMatch ? true : false}>
                                    Sign Up
                                </button>
                            </form>
                            <p>
                                Already have an account?<br />
                                <span className='line'>
                                    <Link to='/login'>Sign In</Link>
                                </span>
                            </p>
                        </section>
                    )}
            </>
        </div>
    )
}


export default Register
