import React from "react";
import './style.scss';

const CubeInfoList = (props) => {
	return (
		<div className='info_list'>
			{props.children}
		</div>
	)
}
export default CubeInfoList;