import React from "react";

function DropDownItem(props) {
	return (
		<a
			href="#"
			className="dropDown_item"
			onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
		>
			<span className="icon-button">
				<img src={props.leftIcon} alt="" />
			</span>
			<span className="icon-right">{props.rightIcon}</span>
		</a>
	);
}

export default DropDownItem;
