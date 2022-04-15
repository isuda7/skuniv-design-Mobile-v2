import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import Card from '..';

const CardPlaylistBasic2 = (props) => {
	return (
		<Card className='playlist basic type2'>
			<Link to='' className='card_inner'>
				<div className='card_head'>
					<em className={props.typeClass}>{props.typeName}</em>
				</div>
				<div className='card_body'>
					<p className='title'><strong>{props.title}</strong></p>
				</div>
				<div className='card_foot'>
					<div className='profile'>
						<span className='avata'><Image src={props.avata} alt='Profile Avata' /></span>
						<p className='name'>{props.name}</p>
					</div>
					<div className='count'>
						<em>총 {props.count}개</em>
					</div>
				</div>
			</Link>
		</Card>
	)
}
export default CardPlaylistBasic2;
