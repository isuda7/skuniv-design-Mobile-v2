import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Label } from 'semantic-ui-react';
import Card from '..';
import Thumb from '../../Thumb';

const CardLearningVer = (props) => {
	const toggleWish = (e) => {
		if (e.target.className.indexOf('is_active') > 0) {
			e.target.classList.remove('is_active');
		} else {
			e.target.classList.add('is_active');
		}
	}

	return (
		<Card className='learning ver'>
			<Link to='' className="card_inner">
				<div className='card_thumb'>
					<Thumb src={props.thumb} alt=''>
						<Button type='button' className='ribon' onClick={toggleWish}><span className='blind'>찜하기</span></Button>
					</Thumb>
				</div>
				<div className='card_body'>
					<p className='sub_txt'>{props.category}</p>
					<p className='title'><strong>{props.title}</strong></p>
				</div>
			</Link>
			<div className='card_foot'>
				<Label className='rate_count'><Icon className='rate' /><span className='count'>{props.count}</span></Label>
				<Button type='button' icon className='learning'><span className='blind'>학습목록</span></Button>
			</div>
		</Card>
	)
}
export default CardLearningVer;
