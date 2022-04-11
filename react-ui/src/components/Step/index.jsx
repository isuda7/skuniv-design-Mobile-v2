import React from 'react';
import './style.scss';

const Step = (props) => {
	return (
		<div className={'step' + (props.className ? ' '+props.className : '')}>
			{props.children}
		</div>
	)
}
export default Step;
