import React from 'react';
import { Link } from 'react-router-dom';
import Card from '..';
import Thumb from '../../Thumb';

const CardBadgeHor = (props) => {
	return (
		<Card className='card badge hor'>
			<Link to='#' className='card_inner'>
				<div className='card_thumb'>
					<Thumb src={props.thumb} alt='' />
				</div>
				<div className='card_body'>
					<p className='sub_txt'>{props.category}</p>
					<p className='title'><strong>{props.title}</strong></p>
					<p className='total_count'>진행중 {props.count}&nbsp;/&nbsp;{props.total}</p>
				</div>
			</Link>
		</Card>
	)
}
export default CardBadgeHor;
