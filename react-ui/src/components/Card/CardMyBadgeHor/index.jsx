import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Card from '..';
import Thumb from '../../Thumb';

const CardMyBadgeHor = (props) => {
	return (
		<Card className='card mybadge hor'>
			<Link to='' className='card_inner'>
				<div className='card_thumb'>
					<Thumb src={props.thumb} alt='' />
				</div>
				<div className='card_body'>
					<p className='sub_txt'>{props.category}</p>
					<p className='title'><strong>{props.title}</strong></p>
					<p className='date'>획득일자 {props.date}</p>
				</div>
			</Link>
			<div className='card_foot'>
				<Button type='button' className='text'>인증서보기</Button>
			</div>
		</Card>
	)
}
export default CardMyBadgeHor;
