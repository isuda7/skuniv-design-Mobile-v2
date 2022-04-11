import React from "react";
import './style.scss'

const BoardItem = (props) => {
	return (
		<div className={'board_item '+props.className}>
			{props.children}
		</div>
	)
}
export default BoardItem