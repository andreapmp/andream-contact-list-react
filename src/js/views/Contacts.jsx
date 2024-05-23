import React, { useState, useContext } from "react";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";

const Contacts = () => {
    const {store, actions} = useContext(Context);

    return (
        <>
            <div>
                <ContactCard />
                <ContactCard />
            </div>
        </>
    );
}

export default Contacts;