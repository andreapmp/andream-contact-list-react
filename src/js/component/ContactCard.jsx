import React from "react";

//this component will take props to populate each contact p tag
const ContactCard = () => {
    return (
        <>
            <div>
                <div className="contact">
                    <img />
                    <div className="contact-info">
                        <p className="contact-name">John Smith</p>
                        <p className="contact-phone">407-333-4567</p>
                        <p className="contact-address">123 Main St.</p>
                        <p className="contact-email">jsmith@gmail.com</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactCard;