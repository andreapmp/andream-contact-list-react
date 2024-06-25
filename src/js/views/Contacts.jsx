import React, { useContext } from "react";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";


const Contacts = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div>
        {store.contacts.map((contact) => {
          return (
            <div className="mb-4 w-100" key={contact.id}>
              <ContactCard
                name={contact.name}
                address={contact.address}
                phone={contact.phone}
                email={contact.email}
                id={contact.id}
              />
   
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
