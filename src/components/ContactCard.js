import React from 'react'
import Image from '../assets/logo.svg'

export default function ContactCard(props) {
    return (
        <div className= "Contact-Box">
            <div className= "Contact-Card">
                <img src = {Image} alt = "profile"/>
                <div className = "Contact-Name">
                    <h2>{props.firstName} </h2>
                    <h2>{props.lastName} </h2>
                 </div>

                    <h4>{props.jobTitle}</h4>
                    <p>{props.emailAddress}</p>
                    <p>{props.phoneNumber}</p>
            
            
            </div>
        </div>
    )
}
