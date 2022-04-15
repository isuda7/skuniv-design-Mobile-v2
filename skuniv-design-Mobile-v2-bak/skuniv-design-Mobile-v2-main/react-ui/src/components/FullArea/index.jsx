import React from 'react';
import './style.scss';

const FullArea = (props) => {
	return (
		<div className='full_area'>
			<div className='flex_area'>
				{props.children}
			</div>
		</div>
	)
}

export default FullArea