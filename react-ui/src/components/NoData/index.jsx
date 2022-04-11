import React from 'react';
import NoDataImg1 from '../../assets/images/demo/confirm.png'
import './style.scss';

const NoData = ({src, alt, children}) => {
	if (src === undefined || src === '') {
		src = NoDataImg1;
	}
	return (
		<div className='no_data'>
			<span className='img'>
				<img src={src} alt={alt} />
			</span>
			{children}
		</div>
	)
}

export default NoData