import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react';
import Card from '..';

const CardPlaylistBasic1 = (props) => {
	return (
		<Card className='playlist basic type1'>
			<div className='card_head'>
				<Button type='button' icon className='file vod'><span className='blind'>VOD Play 보러가기</span></Button>
				<Button type='button' className='text primary buy'>플레이리스트 담기</Button>
			</div>
			<Link to='' className='card_inner'>
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
export default CardPlaylistBasic1;
