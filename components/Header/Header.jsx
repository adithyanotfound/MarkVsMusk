import React from "react"
import { useNavigate } from "react-router-dom";
import "./Header.css"
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"
import userSvg from '../../images/icons/user.svg'
import logOutSvg from '../../images/icons/circle-exclamation.svg'

export default function Header({isAuth, setIsAuth}) {
    const navigate = useNavigate();
    function displayNavbar(){
        const navbar = document.getElementById("navbar");
        navbar.style.right="0"
    }  
    function closeNavbar(){
        const navbar = document.getElementById("navbar");
        navbar.style.right="-100%";
    }
    async function logOut(){
       await signOut(auth).then(
            ()=>{
                setIsAuth(false)
                localStorage.clear()
                
            }
        )
    }
    function checkAuthBlog() {
        if (!localStorage.getItem("isAuth")) {
            alert('Please login to access blogs.')
        }
        else {
            navigate('/blog');
        }
    }   
    return(
        <section id="header" className="section-p">
            {/* Logo */}
            <div className="logo">
                <img src="https://cdn.vectorstock.com/i/500p/88/60/mm-logo-letter-monogram-slash-with-modern-vector-27868860.jpg" alt="" className="logo-img"/>
                <h1 className="logo-title">MARK vs MUSK</h1>
            </div>
            {/* Navbar */}
            <ul id="navbar">
                <li id="close" onClick={closeNavbar}>
                    <img src="https://cdn.icon-icons.com/icons2/2518/PNG/512/x_icon_150997.png" onClick={closeNavbar}/>
                </li>
                <li className="active"><Link to="/">Home</Link></li>
                <li className="active" onClick={checkAuthBlog}>Blogs</li>
                <li className="active"><Link to="/about">About us</Link></li>
                <li className="active"><Link to="/contact">Contact us</Link></li>
                {!isAuth && <li className="register"><button> <Link to="/register">Register</Link></button></li>}
                {!isAuth ? <li className="logIn">
                    <img src={userSvg} className="icon" alt="login image"/>
                    <Link to="/login">Log In</Link>
                </li>   
                :
                <li className="logIn" onClick={logOut}>
                    <img src={logOutSvg} className="icon" alt="login image"/>
                    <Link to='/'>Log Out</Link>
                </li>}
            </ul>
            <div id="mobile-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt="" onClick={displayNavbar}/>
            </div>
        </section>
    )
}