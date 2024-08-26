import React from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Footer from "./components/Footer/Footer"
import ContactUs from "./components/ContactUs/ContactUs"
import ContactUsForm from "./components/ContactUsForm/ContactUsForm"
export default function ContactPage({isAuth, setIsAuth}) {
    return(
        <section>
            <Header isAuth = {isAuth} setIsAuth = {setIsAuth}/>
            <Hero/>
            <ContactUs/>
            <ContactUsForm/>
            <Footer isAuth = {isAuth} setIsAuth = {setIsAuth}/>
        </section>
    )
}

