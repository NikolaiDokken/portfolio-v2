import React from "react";
import { Link } from "gatsby";
import "../styles/global.css";

export default function Navbar() {
	return (
		<nav>
			<h1>Niko's koder</h1>
			<div className="links">
				<Link to="/">Hjem</Link>
				<Link to="/projects">Prosjekter</Link>
				<Link to="/about">Om meg</Link>
			</div>
		</nav>
	);
}
