import React from "react";
import userSvg from '../../images/icons/user.svg'
import facebookSvg from '../../images/icons/facebook-f.svg'
import twitterSvg from '../../images/icons/twitter.svg'
import linkedInSvg from '../../images/icons/linkedin-in.svg'
import instagramSvg from '../../images/icons/instagram.svg'
import quoraSvg from '../../images/icons/quora.svg'
import "./Footer.css"
import { Link } from "react-router-dom";
export default function Footer({isAuth, setIsAuth}){
    return(
        <footer id="footer">
            {/* Footer Top */}
            <section id="footer-container" className="section-m1">
                <div className="col">
                    <h1 className="logo">MARK vs MUSK</h1>
                </div>
                <div className="col">
                    <h4 className="title">About</h4>
                    <div className="footer-links">
                        <a href="">About us</a>
                        <a href="">Contact us</a>
                        <a href="">Subscribe</a>

                        
                    </div>
                </div>
                <div className="col">
                    <h4 className="title">Blog-Categories</h4>
                    <div className="footer-links">
                        <a href="">Social Impact</a>
                        <a href="">Technology</a>
                        <a href="">Entrepreneurship</a>
                        <a href="">Future Vision</a>
                        <a href="">Behaviour & Personality</a>
                        <a href="">Media Presence & Public Perception</a>
                        <a href="">Economic & Industrial Influence</a> 
                        
                    </div>
                </div>
                <div id="footer-social" className="col">
                    <h4 className="title">Support</h4>
                    <div className="footer-links">
                        <a href="">Sitemap</a>
                        <a href="">Developer form</a> 
                        <a href="">Help</a> 
                    </div>
                </div>
                <div className="col social">
                    {!isAuth && <button className="footer-logIn">
                        <img src={userSvg} className="icon" alt="login image"/>
                        <Link to='/login'>Log In</Link>
                    </button>}

                    <div className="social-icons">
                        <img src={linkedInSvg} alt="LinkedIn social media link" className="icon" />
                        <img src={twitterSvg} alt="Twitter social media link" className="icon" />
                        <img src={facebookSvg} alt="Facebook social media link" className="icon" />
                        <img src={instagramSvg} alt="Instagram social media link" className="icon" />
                        <img src={quoraSvg} alt="Quora social media link" className="icon" />
                    </div>
                </div>
            </section>
            
            {/* Footer Bottom */}
            <section id="footer-bottom">
                <div className="copyright">
                    <small>@2023 - 2023 MARKvsZUCK.com</small>
                    <small>All rights reserved. All creations copyright belongs to the creators.</small>                </div>
                <div className="privacy">
                    <a href="">Legal Notice</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Use</a>
                </div>
            </section>
        </footer>
    )
}