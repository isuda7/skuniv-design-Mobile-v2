import React from 'react';
import { Link } from 'react-router-dom';
import BoardItem from '..';
import Thumb from '../../Thumb';

const BoardItemTeacher = (props) => {
	return (
		<BoardItem className='teacher'>
			<Link to='' className="item_inner">
				<div className='item_thumb'>
					<Thumb src={props.thumb} alt='' />
				</div>
				<div className='item_body'>
					<p className='title'><strong>{props.title}</strong></p>
					<p className='sub_txt'>{props.category}</p>
				</div>
				<div className='item_foot'>
					<ul className='info_list'>
						<li>
							<strong className='tit'>소속기관</strong>
							<span className='para'>{props.desc1}</span>
						</li>
						<li>
							<strong className='tit'>강의분야</strong>
							<span className='para'>{props.desc2}</span>
						</li>
					</ul>
				</div>
			</Link>
		</BoardItem>
	)
}
export default BoardItemTeacher;
