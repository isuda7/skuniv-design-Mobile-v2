import React from "react";
import './style.scss';

const SelectList = (props) => {
	return (
		<div className="select_list">
			{props.children}
		</div>
	)
}
export default SelectList;