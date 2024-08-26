import React from "react"
import "./ContactUsGroups.css"
export default function ContactUsGroups(props){
    return(
        <main>
             <div className="group">
                <h1 className="title">{props.title}</h1>
                <p className="content">
                    {props.desc}
                </p>

                <div className="details">
                    <li>
                        <img src="./images/icons/envelope.svg" alt="" className="icon"/>
                        <p>{props.email}</p>
                    </li>

                    <li>
                        <img src="./images/icons/phone.svg" alt="" className="icon"/>
                        <p>{props.contact}</p>
                    </li>
                </div>
            </div>
        </main>
       
    )
}