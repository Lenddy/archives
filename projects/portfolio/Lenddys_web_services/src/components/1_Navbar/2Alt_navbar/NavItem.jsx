import { useState } from "react";
import burger_menu from "../../../assets/circular_menu_items/burger-menu.svg";

function NavItem(props) {
	const [open, setOpen] = useState(false);

	return (
		<li className="side-bar-item">
			<a
				href="#"
				className="icon-button "
				onClick={(e) => {
					setOpen(!open), e.preventDefault();
				}}
			>
				{props.icon ? (
					props.icon
				) : (
					<img src={burger_menu} alt="burger menu" />
				)}
			</a>
			{open && props.children}
		</li>
	);
}

export default NavItem;
