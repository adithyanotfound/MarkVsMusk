import React from 'react';
import { Link } from 'react-router-dom';
import './latestQuiz.css'
const Latestquiz = () => {
    return (
        <div id='latestQuizContainer' className='section-p'>
            <div className="box box-1">
                <div className="box-img"></div>
                <h4>🚀🌍 Embark on the Mark vs Musk Challenge: Discover Your Visionary Ally! 🌍🚀</h4>
                <Link to="/blog" className="go-back-to">
                    Take the Quizz now
                    <img src="../../images/icons/arrow-right.svg" alt="arrow right" className="icon"/>
                </Link>
            </div>

            <div className="box box-2">
                <div className="box-img"></div>
                <h4>🧠🧐 Explore the Minds of Titans: Take the Mark vs Musk Quiz! 🧠🧐</h4>
                <Link to="/blog" className="go-back-to">
                    Take the Quizz now
                    <img src="../../images/icons/arrow-right.svg" alt="arrow right" className="icon"/>
                </Link>
            </div>

            <div className="box box-3">
                <div className="box-img"></div>
                <h4>📱🔭 Digital Innovator or Cosmic Dreamer: Which Visionary Path Guides Your Imagination? 📱🔭</h4>
                <Link to="/blog" className="go-back-to">
                    Take the Quizz now
                    <img src="../../images/icons/arrow-right.svg" alt="arrow right" className="icon"/>
                </Link>
            </div>

            <div className="box box-4">
                <div className="box-img"></div>
                <h4>👽🤑 Pioneering Innovations: Are You Team Mark or Team Musk? 👽🤑</h4>
                <Link to="/blog" className="go-back-to">
                    Take the Quizz now
                    <img src="../../images/icons/arrow-right.svg" alt="arrow right" className="icon"/>
                </Link>
            </div>
            
        </div>  
    );
}

export default Latestquiz;
