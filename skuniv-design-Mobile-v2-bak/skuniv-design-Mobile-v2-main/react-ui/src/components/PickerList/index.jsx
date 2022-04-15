import React from "react";
import './style.scss';

const PickerList = (props) => {
	return (
		<div className="picker_list">
			{props.children}
		</div>
	)
}
export default PickerList;