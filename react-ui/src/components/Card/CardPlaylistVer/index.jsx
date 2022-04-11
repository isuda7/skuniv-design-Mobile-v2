import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import Card from '..';
import Thumb from '../../Thumb';

const CardPlaylistVer = (props) => {
	return (
		<Card className='playlist ver'>
			<Link to='#' className='card_inner'>
				<Thumb src={props.thumb} alt=''>
					<div className='avata_name'>
						<span className='avata'><Image src={props.avata} alt='Profile Avata' /></span>
						<strong className='name'>{props.name}</strong>
					</div>
				</Thumb>
				<div className='card_body'>
					<p className='title'><strong>{props.title}</strong></p>
				</div>
			</Link>
		</Card>
	)
}
export default CardPlaylistVer;
