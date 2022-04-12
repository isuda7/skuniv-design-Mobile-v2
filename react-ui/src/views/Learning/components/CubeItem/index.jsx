import React from "react";
import './style.scss';

const CubeItem = (props) => {
	return (
		<div className={'cube_item ' + props.className}>
			{props.children}
		</div>
	)
}
export default CubeItem;