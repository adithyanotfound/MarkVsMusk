import React from "react"
import ReactDOM from "react-dom"
import HomePage from "./HomePage"
import BlogPage from "./BlogPage"
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage"
import SingleBlogPage from "./SingleBlogPage"
import RegisterPage from "./RegisterPage"
import LogInPage from "./LogInPage"
import "./style.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App(){
    const [isAuth, setIsAuth] = React.useState(localStorage.getItem("isAuth") === 'false')
    return(
        <section>
            <BrowserRouter> 
                <Routes>
                    <Route path="/" exact element={<HomePage isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
                    <Route path="/blog" element={<BlogPage isAuth={isAuth}/>}/>
                    <Route path="/about" element={<AboutPage isAuth={isAuth}/>}/>
                    <Route path="/contact" element={<ContactPage isAuth={isAuth}/>}/>
                    <Route path="/blog/:id" element={<SingleBlogPage isAuth={isAuth}/>}/>
                    <Route path="/login" element={<LogInPage isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
                    <Route path="/register" element={<RegisterPage isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
                </Routes>
            </BrowserRouter>
        </section>
    )
}

ReactDOM.render(<App/> ,  document.getElementById("home-root"))