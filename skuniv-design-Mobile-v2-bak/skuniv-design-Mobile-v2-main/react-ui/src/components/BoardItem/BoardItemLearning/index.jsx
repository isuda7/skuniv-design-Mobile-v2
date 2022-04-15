import React from 'react';
import { Link } from 'react-router-dom';
import BoardItem from '..';
import Thumb from '../../Thumb';

const BoardItemLearning = (props) => {
	return (
		<BoardItem className={'learning ' + props.className + (props.checked?' has_check':'')}>
			{ props.checked &&
				<div className='item_check'>
					<div class="ui checkbox basic">
						<input type="checkbox" name={props.chkName} id={props.chkId} tabindex='0' className="hidden" />
						<label for={props.chkId}></label>
					</div>
				</div>
			}
			<Link to='' className="item_inner">
				<div className='item_thumb'>
					<Thumb src={props.thumb} alt='' />
				</div>
				<div className='item_body'>
					<p className='sub_txt'>{props.category}</p>
					<p className='title'><strong>{props.title}</strong></p>
				</div>
			</Link>
			{props.children}
		</BoardItem>
	)
}
export default BoardItemLearning;
