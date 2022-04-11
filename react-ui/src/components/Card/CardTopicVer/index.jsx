import React from 'react';
import { Link } from 'react-router-dom';
import Card from '..';
import Thumb from '../../Thumb';

const CardTopicVer = (props) => {
	return (
		<Card className='card topic ver'>
			<Link to='#' className='card_inner'>
				<div className='card_thumb'>
					<Thumb src={props.thumb} alt='' />
				</div>
				<div className='card_body'>
					<p className='title'><strong>{props.title}</strong></p>
				</div>
				<div className='card_foot'>
					<p className='total_count'>
						<span className='total'>총</span>&nbsp;
						<em className='count'>{props.count}</em>
						<span className='text'>개 학습카드</span>
					</p>
				</div>
			</Link>
		</Card>
	)
}
export default CardTopicVer;
