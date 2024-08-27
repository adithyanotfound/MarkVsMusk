import React from "react";
import "./SingleBlog.css"
import {Link} from "react-router-dom"
import BlogsData from "../../BlogsData";
import Comment from "../Comment/Comment";
import Confetti from "../Confetti/Confetti";
export default function SingleBlog(props){
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
    const BlogElements = BlogsData.filter((product)=>product.blogCategory === props.blogCategory && product.id !== props.blogId).map(
        (data)=>{
            return(
                <div className="related-blogs" key={data.id}>
                    <img src={data.cover} alt="" />
                    <Link to={`/blog/${data.id}`} onClick="window.location.reload(true);">{data.title}</Link>
                </div>
            )
        }
    )
    return(
        <section id="single-blog-container" className="section-p">
            <main className="single-blog">
                <Link to="/blog" className="go-back-to">
                    <img src="https://cdn-icons-png.flaticon.com/512/3298/3298618.png" alt="" className="icon"/>
                    BACK TO ALL POSTS
                </Link>
                
                <h1>{props.title}</h1>
                <div className="row-2">
                    <div className="author-details">
                        <img src={props.authorCover} alt="" className="author-img" />
                        <p>
                            <a href="">{props.authorName}</a>
                            on {props.publishedDate}
                        </p>
                    </div>

                    <div className="reading-time">
                        <img src="https://w7.pngwing.com/pngs/971/269/png-transparent-clock-computer-icons-clock-cdr-text-time-thumbnail.png" alt="" className="icon"/>
                        <p>Reading Time: 1 mins</p>
                    </div>

                </div>
                <div className="row-3">
                    <img src={props.cover} alt="" />
                    {props.content.split('\n').map((paragraph, index)=>{
                        return (
                            <p className="content" key={index}>
                                {paragraph}
                            </p>    
                        )
                    })}
                </div>
                <Confetti/>
            </main>

            <main className="related-posts-container ">
                <form action="" onSubmit={validate}>
                    <p>Get the latest CI intel in your inbox by subscribing to our blog!</p>
                    <input type="text" name="" id="" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>
                    <div id="error" className="errorBlog">
                        <img src="../../images/icons/exclamation.svg" alt="error exclamation image" />
                        <small>{`Please ${text} this required field`}</small>
                    </div>
                    <button type="submit">Subscribe</button>
                </form>
                <p className="title">related blog posts</p>
                {BlogElements.slice(0,5)}
            </main>
            <Comment/>
        </section>
    )
}