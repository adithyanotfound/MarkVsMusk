import React from 'react';
import "./Testimonial.css"
const Testimonial = () => {
    const testimonial = [{
        id: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam sunt, laborum molestias eius voluptatem",
        img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80",
        name: "lorem",
        desig: "Lorem, ipsum dolor." 
    },
    {
        id: 2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam sunt, laborum molestias eius voluptatem",
        img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80",
        name: "lorem",
        desig: "Lorem, ipsum dolor." 
    },
    {
        id: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsam sunt, laborum molestias eius voluptatem",
        img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&w=1000&q=80",
        name: "lorem",
        desig: "Lorem, ipsum dolor." 
    }
    ]
    return (
        <div id='testimonial-container' className='section-p'>

            <div className="testimonial-title">
                <h1>"Celebrating the Success Stories: Empowering Voices of Delight and Transformation – Discover What Our Valued Clients Have to Say in Their Inspiring Testimonials!"</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, exercitationem.</p>
            </div>
            <div className="testimonials">
                {testimonial.map((data)=>{
                    return (        
                        <div className="box" key={data.id}>
                            <h1>"</h1>
                            <p>{data.description}</p>
                            <div className="user">
                                <img src={data.img} alt={data.name}/>
                                <p>
                                    {data.name} <br/>
                                    <span>{data.desig}</span>
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Testimonial;
