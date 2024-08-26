import React from "react"
import ContactUsGroups from "../ContactUsGroups/ContactUsGroups"
export default function ContactUs(){
    return(
        <section id="about-us-container" className="section-p">
                <h1 className="welcome-title">Contact Us</h1>

                <div className="group">
                    <p className="content">
                    "Mark vs Musk," your ultimate destination for in-depth analysis and comparison of two titans in the world of technology, innovation, and entrepreneurship – Mark Zuckerberg and Elon Musk. Our website is dedicated to providing comprehensive and well-researched blogs that delve into the lives, achievements, and impacts of these visionary leaders.
                    We value your feedback, inquiries, and suggestions. Reach out to us through any of the following channels, and our dedicated team will be delighted to assist you.
                    </p>
                </div>
                <ContactUsGroups
                    title="General Inquiries"
                    desc="For general inquiries or any non-specific queries, you can contact us at:"
                    email="abc@gmail.com"
                    contact="+1 1234567890"
                />
                 <ContactUsGroups
                    title="Technical Support"
                    desc="Encountering technical issues with our website? Our tech support team is here to help:"
                    email="abc@gmail.com"
                    contact="+1 1234567890"
                />
                 <ContactUsGroups
                    title="Advertising and Collaboration"
                    desc="If you are interested in advertising opportunities or wish to collaborate with our website, please get in touch:"
                    email="abc@gmail.com"
                    contact="+1 1234567890"
                />
                 <ContactUsGroups
                    title="Media and Press"
                    desc="Journalists, bloggers, and media professionals can contact us for media-related inquiries:"
                    email="abc@gmail.com"
                    contact="+91 1234567890"
                />
                 <ContactUsGroups
                    title="Customer Support"
                    desc="For assistance related to your user account, subscriptions, or any other specific concerns, our customer support team is ready to assist you:"
                    email="abc@gmail.com"
                    contact="+91 1234567890"
                />
                 <div className="group">
                    <h1 className="title">Social</h1>
                    <ul className="social-links">
                        <li>Twitter: <a href="">@MARkvsMUSK</a></li>
                        <li>LinkedIn: <a href="">@MARKvsMUSK</a></li>
                        <li>Facebook: <a href="">@MARKvsMUSK</a></li>
                        <li>Instagram: <a href="">@MARKvsMUSK</a></li>
                    </ul>
                </div>

                <div className="group">
                    <h1 className="title">Get in Touch Today!</h1>
                    <p className="content">
                        Whether you have questions, feedback, or collaboration proposals, we are eager to hear from you. Your engagement with us helps us grow and continuously improve our services to cater to your needs better. Let's embark on this journey of personal growth and empowerment together!
                    </p>
                </div>
        </section>
    )
}