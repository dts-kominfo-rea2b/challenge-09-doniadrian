// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css

import "./Contact.css";
import React from 'react';

const Contact = (props) => {

    return (
        <>
        <div className="contact-item">
            <div className="contact-images">
                <img src={props.photo} />
            </div>
            <div className="contact-content">
                <h4>{props.name}</h4>
                <a href={`tel:${props.phone}`}>{props.phone}</a>
                <a href={`mailto:${props.email}`}>{props.email}</a>
            </div>
            
        </div>
        
        </>
    )
}

export default Contact;