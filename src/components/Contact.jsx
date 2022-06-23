// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css

import "./Contact.css";
import React from 'react';

const Contact = ({ data }) => {
    const { name, email, phone, photo } = data;
    return (
        <>
        <div className="contact-item">
            <div className="contact-images">
                <img src={photo} />
            </div>
            <div className="contact-content">
                <h4>{name}</h4>
                <a href={`tel:${phone}`}>{phone}</a>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
            
        </div>
        
        </>
    )
}

export default Contact;