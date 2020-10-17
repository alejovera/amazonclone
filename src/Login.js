import React, {useState} from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom" 
import { auth } from './firebase'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    
    const login = e => {
        e.preventDefault()
        // parte de la logica login
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // Ya se completa la peticion, mandarlo de nuevo al HomePage
                history.push('/');
            })
            .catch((e) => alert(e.message))
    }
    const register = e =>{
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(auth => {
                //usuario creado, redireccionar a HomePage
                history.push('/')
            })
            .catch(e => alert(e.message))
    }
    
    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input onChange={event => setEmail(event.target.value)} value={email} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInbutton">Sign in</button>
                </form>
                <p>By bla bla bla</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
