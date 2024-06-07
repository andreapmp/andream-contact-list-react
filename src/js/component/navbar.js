import React from "react";
import { Link } from "react-router-dom";
import AddContact from "../views/AddContact.jsx";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand mb-0"><h3>Contact List</h3></span>
			</Link>
			<div className="ml-auto">
				<Link to="/addcontact">
					<button className="btn btn-success"><h5>Add new contact</h5></button>
				</Link>
			</div>
		</nav>
	);
};
