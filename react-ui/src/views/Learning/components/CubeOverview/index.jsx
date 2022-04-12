import React from "react";
import { Button } from "semantic-ui-react";
import './style.scss';

const CubeOverview = (props) => {
	return (
		<div className='cube_overview'>
			<ul>
				<li className='item_complete'>{props.count}명 이수</li>
				<li className='item_part'>{props.part}</li>
				<li className='item_contact'>{props.contact}</li>
			</ul>
			<Button type='button' className="text arrow_link">문의하기</Button>
		</div>
	)
}
export default CubeOverview;