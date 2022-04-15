import React from 'react';
import { Link } from 'react-router-dom';
import BoardItem from '..';
import Thumb from '../../Thumb';

const BoardItemBadge = (props) => {
	return (
		<BoardItem className='badge'>
			<Link to='' className="item_inner">
				<div className='item_thumb'>
					<Thumb src={props.thumb} alt='' />
				</div>
				<div className='item_body'>
					<p className='sub_txt'>{props.category}</p>
					<p className='title'><strong>{props.title}</strong></p>
				</div>
			</Link>
		</BoardItem>

	)
}
export default BoardItemBadge;
