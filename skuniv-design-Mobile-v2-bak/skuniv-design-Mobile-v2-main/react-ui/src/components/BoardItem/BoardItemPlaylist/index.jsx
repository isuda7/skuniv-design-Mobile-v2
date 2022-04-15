import React from 'react';
import { Link } from 'react-router-dom';
import BoardItem from '..';
import Thumb from '../../Thumb';

const BoardItemPlaylist = (props) => {
	return (
		<BoardItem className={'playlist ' + props.className + (props.checked?' has_check':'')}>
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
					<p className='title'>{props.userName}</p>
					<p className='company'>{props.partName}/{props.compName}</p>
					<p className='email'>{props.email}</p>
				</div>
			</Link>
		</BoardItem>
	)
}
export default BoardItemPlaylist;
