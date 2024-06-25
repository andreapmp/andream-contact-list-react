import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const EditContact = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  let params = useParams();

  useEffect(() => {
    let contact = store.contacts.find((item, index) => item.id == params.id);
    setName(contact.name),
      setPhone(contact.phone),
      setEmail(contact.email),
      setAddress(contact.address);
  }, []);

  function handleClick() {
    let contact = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      agenda_slug: "andream",
    };
    actions.editContact(params.id, contact);
    navigate("/");
  }

  let navigate = useNavigate();

  return (
    <>
      <div className="mx-4">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Full Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Phone
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Address
          </label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Address"
          />
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-primary fw-bold"
          onClick={() => handleClick()}
        >
          Save Contact
        </button>
      </div>
    </>
  );
};

export default EditContact;
