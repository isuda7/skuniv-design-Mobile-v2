import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'semantic-ui-react';
import BoardItem from '..';
import Thumb from '../../Thumb';

const BoardItemCommunity1 = (props) => {
	return (
		<BoardItem className='community'>
			<Link to='' className="item_inner">
				<div className='item_thumb'>
					<Thumb src={props.thumb} alt='' />
				</div>
				<div className='item_body'>
					<p className='title'><strong>{props.title}</strong></p>
				</div>
			</Link>
			<div className='item_util'>
				<Rating />
			</div>
		</BoardItem>
	)
}
export default BoardItemCommunity1;
