import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider, provider_fb} from "../../firebase";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
const Register = ({setIsAuth}) => {
    let navigate = useNavigate();
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const signIn = (event) =>{
        event.preventDefault()
        createUserWithEmailAndPassword(auth, email, password).then((userCredential)=>{
            setIsAuth(true)
            localStorage.setItem('isAuth', true)
            navigate('/')
        }).catch((error)=>{
            console.log(error);
        })

    }
    return (
        <section id="register-container">
            <form action="" id="login-form" onSubmit={signIn}>
                <Link to="/" className="go-back-to">
                    <img src="../../images/icons/less-than.svg" alt="" className="icon"/>
                    go back to home page
                </Link>

                <p>Create your MARK vs MUSK account</p>

                <input type="email" id="email" placeholder="Email Address" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" id="psswd" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="logIn-btn signIn-btn" type="submit">Sign In</button>
            </form>
       
    </section>
    );
}

export default Register;
