import React from 'react';
import './style.scss';

const Board = (props) => {
	return (
		<div className={'board_sec' + (props.className?' '+props.className:'')}>
			{props.children}
		</div>
	)
}
export default Board;
