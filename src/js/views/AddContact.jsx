import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = async () => {
    let contact = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      agenda_slug: "andream",
    };
    let result = await actions.createNewContact(contact);
    if (result) {
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      navigate("/");
    }
  };

  let navigate = useNavigate();

  const sendContact = (e) => {
    e.preventDefault();
    actions.addNewContact(name, email, phone, address);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    navigate("/");
  };

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

export default AddContact;
