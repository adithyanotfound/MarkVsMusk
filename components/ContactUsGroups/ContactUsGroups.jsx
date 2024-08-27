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
                        <img src="https://w7.pngwing.com/pngs/1011/641/png-transparent-message-logo-yahoo-mail-email-address-webmail-email-icon-miscellaneous-angle-triangle-thumbnail.png" alt="" className="icon"/>
                        <p>{props.email}</p>
                    </li>

                    <li>
                        <img src="https://cdn-icons-png.freepik.com/256/455/455705.png?semt=ais_hybrid" alt="" className="icon"/>
                        <p>{props.contact}</p>
                    </li>
                </div>
            </div>
        </main>
       
    )
}