import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Label, Rating } from 'semantic-ui-react';
import BoardItem from '..';
import Thumb from '../../Thumb';

const BoardItemCommunity2 = (props) => {
	return (
		<BoardItem className='community'>
			<Link to='' className="item_inner">
				<div className='item_thumb'>
					<Thumb src={props.thumb} alt='' />
				</div>
				<div className='item_body'>
					<p className='sub_txt'>{props.category}</p>
					<p className='title'><strong>{props.title}</strong></p>
				</div>
				<div className='item_foot'>
					<p className='desc'>{props.desc}</p>
					<div className='info_area'>
						<Label as='span' className='username normal'>
							<Icon className='level manager' />
							{props.name}
						</Label>
						<span className='member'>
							멤버 {props.member}
							<Icon className='lock'><span className='blind'>비밀글</span></Icon>
						</span>
					</div>
				</div>
			</Link>
			<div className='item_util'>
				<Rating />
			</div>
		</BoardItem>
	)
}
export default BoardItemCommunity2;
