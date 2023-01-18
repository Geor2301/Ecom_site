import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { auth, db } from './Firebase';
import logo from './e_cart_logo.png';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    const signIn = e =>{
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password).then((auth) =>{
            if(auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
            if(auth) {
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }
   
  return (
    <div className='login'>

        <img 
            className='login_image'
            src='https://www.xmple.com/wallpaper/gradient-purple-green-linear-1366x768-c2-008080-9932cc-a-15-f-14.svg'
            alt=''
        />

        <Link to='/'>
        <img className='login_logo' src={logo} alt="logo" />
        </Link>

        <div className='login_container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' placeholder='Email Address' value={email}
                    onChange={e=> setEmail(e.target.value)} 
                />

                <h5>Password</h5>
                <input type='password' placeholder='Password' value={password}
                    onChange={e=> setPassword(e.target.value)} 
                />

                <button type='submit' className='login_signInButton' onClick={ signIn }>
                    Sign In
                </button>
            </form>

            <button type='submit' className='login_registerButton'  onClick={ register }>                   
                Create your e-cart Account
            </button>
        </div>

    </div>

   
  )
}

export default Login
