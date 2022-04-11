import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react';
import BoardItem from '..';
import Thumb from '../../Thumb';
import ModalBottomSheet01 from './ModalBottomSheet01';

const BoardItemCommunity3 = (props) => {
	return (
		<BoardItem className='community'>
			<Link to='' className="item_inner">
				<div className='item_thumb'>
					<Thumb src={props.thumb} alt='' />
				</div>
				<div className='item_body'>
					<p className='title'><strong>{props.title}</strong></p>
				</div>
				<div className='item_foot'>
					<div className='info_area'>
						<Label as='span' className='username normal'>
							<Icon className='level manager' />
							<span className='name'>{props.name}</span>
						</Label>
						<span className='member'>
							멤버 {props.member}
							<Icon className='lock'><span className='blind'>비밀글</span></Icon>
						</span>
					</div>
				</div>
			</Link>
			<div className='item_util'>
				<ModalBottomSheet01 />
			</div>
		</BoardItem>
	)
}
export default BoardItemCommunity3;
