import React from "react"
import CountUp from "react-countup"
import "./FeaturedPost.css"
export default function FeaturedPost(){
    const [email, setEmail] = React.useState('');
    const [text, setText] = React.useState('');
    function validate(event){
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const error = document.getElementById('error');
        if(email === ""){
            event.preventDefault();
            setText('complete')
            error.classList.add('display')
        } 
        else if(!email.match(validRegex)){
            event.preventDefault();
            setText('correct')
            error.classList.add('display')
        }
        else{
            error.classList.remove('display')
        }
        
    }
    return(
        <section id="fePost-root" className="section-p">
            <div className="fePost-title">
                <h1>Zuckerberg vs Musk: A Benevolent Face-off of Tech Pioneers</h1>
            </div>
            
            <div className="authorDetails">
                <img src="https://static-00.iconduck.com/assets.00/poll-icon-2048x2048-yi03citz.png" alt="" />
                <p><a href="">Featured Poll</a>on Tue, Jun 27, 2023</p>
            </div>
            
            <main className="fePost-container">
                {/* First Container */}
                <div id="polls-section">
                    <form className="fe-polls">
                        <div className="poll">
                            <h4>Exploring the Minds of Visionaries: Which Area of Innovation Fascinates You Most?</h4>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Mark Zuckerberg's Vision of a Connected World</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Elon Musk's Mission to Colonize Mars</label>
                            </div>
                            
                            <div className="poll-votes">
                                <small>Total Votes: 24</small>
                                <small>5 days left</small>
                                <button className="poll-btn">Vote now</button>
                            </div>
                        </div>

                    </form>
                    <form className="fe-polls">
                        <div className="poll">
                            <h4>Exploring the Minds of Visionaries: Which Area of Innovation Fascinates You Most? </h4>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Elon Musk's Quest for Interplanetary Colonization</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Mark Zuckerberg's Impact on Social Media and Connectivity</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Can't Decide – They're Both Incredible!</label>
                            </div>
                            <div className="poll-votes">
                                <small>Total Votes: 24</small>
                                <small>5 days left</small>
                                <button className="poll-btn">Vote now</button>
                            </div>
                        </div>

                    </form>
                </div>
                
                {/* Second Container */}
                <div className="fePost-content">
                    <p>In the dazzling arena of tech wizards, where codes fly like spells and innovation is the currency, two names blaze their trails like shooting stars;</p>
                    <p>
                        <a href="https://en.wikipedia.org/wiki/Mark_Zuckerberg" target="_Blank">Mark Zuckerberg</a>and <a href="https://en.wikipedia.org/wiki/Elon_Musk" target="_Blank">Elon Musk.</a>
                    </p>
                    <p>It's like watching a cosmic ping-pong match, where these two titans volley ideas back and forth, each with their unique spin.</p>
                    <p>Elon recently making twitter open source was a huge mistake and zuckerberg forked that code and launched threads which was able to gain 100 million users in just a few days.</p>
                    <p>Similarly Elon rebranding twitter to X can be either a huge blunder or a 1000IQ 5D chess move which we can't even imagine.</p>
                    <h4>Parallel Universes, Totally Different Playgrounds</h4>
                    <p>Even you can contribute to this friendly battle between these tech pioneer through this website.</p>
                    <p>Share your valuable thought here an make them reach everyone.</p>
                    <div className="blog-read-more">
                        <a href="">Read More</a>
                        <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-coloricon/21/04-512.png" alt="read more link" />
                    </div>
                </div>

                {/* Third Container */}
                <form className="newsletter" onSubmit={validate}>
                    <p className="title">SUBSCRIBE TO THIS NEWSLETTER*</p>
                    <input type="text" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>
                    <div id="error" className="error">
                        <img src="./images/icons/exclamation.svg" alt="error exclamation image" />
                        <small>{`Please ${text} this required field`}</small>
                    </div>

                    <p className="counter">
                    <CountUp
                        start={0}
                        end={500}
                        duration={4.75}
                        useEasing={true}
                        useGrouping={true}
                        separator=" "
                        decimal=","
                        prefix=""
                        suffix=" people have aldready joined"
                    />
                    </p>
                    <button type="submit">Submit</button>
                    
                </form>
            </main>
        </section>
    )
}