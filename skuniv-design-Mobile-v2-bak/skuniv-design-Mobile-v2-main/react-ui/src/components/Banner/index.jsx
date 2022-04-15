import React from 'react';
import './style.scss';

const Banner = (props) => {
	return (
		<div className={'banner' + (props.className?' '+props.className:'')}>
			{props.chilren}
		</div>
	)
}
export default Banner;
