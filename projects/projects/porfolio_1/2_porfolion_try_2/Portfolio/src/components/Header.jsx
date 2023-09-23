import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className=" fixed  w-full text-green-500 flex justify-between p-4 items-canter">
			<div className="text-2xl">
				<h1>
					e<span> logo </span>
				</h1>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/"> home </Link>
					</li>
					<li>
						<Link to="/"> about </Link>
					</li>
					<li>
						<Link to="/"> Projects </Link>
					</li>
					<li>
						<Link to="/"> game</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
