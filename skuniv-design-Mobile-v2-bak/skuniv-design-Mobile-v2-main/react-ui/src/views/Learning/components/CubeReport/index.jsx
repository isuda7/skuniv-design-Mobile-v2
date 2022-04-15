import React from "react";
import './style.scss';

const CubeReport = (props) => {
	return (
		<div className='info_list'>
			{props.children}
		</div>
	)
}
export default CubeReport;