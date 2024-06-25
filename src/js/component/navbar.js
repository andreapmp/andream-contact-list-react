import React from "react";
import { Link } from "react-router-dom";
import AddContact from "../views/AddContact.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand ms-3 h1">Contact List</span>
			</Link>
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-success me-3 fw-bold">Add contact</button>
				</Link>
			</div>
		</nav>
	);
};
