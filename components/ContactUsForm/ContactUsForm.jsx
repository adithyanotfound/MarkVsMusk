import React from "react"
import "./ContactUsForm.css"
export default function ContactUsForm(){
    return(
        <section id="contact-form" className="section-p">
            <form action="" name="contact-form" id="form">
                <span>Leave a message</span>
                <h2>We love to hear from you!</h2>
                <input type="text" name="name" id="name" placeholder="Your Name" required />
                <input type="email" name="email" id = "email" placeholder="Your Email" required />
                <input type="text" name="subject" id = "subject" placeholder="Your Subject" required />
                <textarea name="message" id="area-msg" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            
            <div className="members">
                <h2>Members</h2>
                <div className="people">
                    <img src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80" alt=""/>
                    <p><span>Lorem, ipsum.</span>Phone: +1 123456789 <br/> Email: MARKvsMUSK@gmail.com</p>
                </div>
                <div className="people">
                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80" alt=""/>
                    <p><span>Lorem, ipsum.</span>Phone: +1 123456785<br/> Email: MARKvsMUSK@gmail.com</p>
                </div>
                <div className="people">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" alt=""/>
                    <p><span>Lorem, ipsum.</span>Phone: +1 123456789 <br/> Email: MARKvsMUSK@gmail.com</p>
                </div>
            </div>
    </section>
    )
}